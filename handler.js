/**
 * Message Handler - Processes incoming messages and executes commands
 */

const config = require('./config');
const database = require('./database');
const { loadCommands } = require('./utils/commandLoader');
const { addMessage } = require('./utils/groupstats');
const { jidDecode, jidEncode } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Group metadata cache to prevent rate limiting
const groupMetadataCache = new Map();
const CACHE_TTL = 60000; 

// Load all commands
const commands = loadCommands();

// Unwrap WhatsApp containers
const getMessageContent = (msg) => {
  if (!msg || !msg.message) return null;
  let m = msg.message;
  if (m.ephemeralMessage) m = m.ephemeralMessage.message;
  if (m.viewOnceMessageV2) m = m.viewOnceMessageV2.message;
  if (m.viewOnceMessage) m = m.viewOnceMessage.message;
  if (m.documentWithCaptionMessage) m = m.documentWithCaptionMessage.message;
  return m;
};

// --- (Kodi ya getCachedGroupMetadata na nyinginezo ziendelee hapa...) ---

// SEHEMU MUHIMU: Main message handler iliyorekebishwa
const handleMessage = async (sock, msg) => {
  try {
    if (!msg.message) return;
    const from = msg.key.remoteJid;
    if (isSystemJid(from)) return;

    const content = getMessageContent(msg);
    if (!content) return;

    const sender = msg.key.fromMe ? sock.user.id.split(':')[0] + '@s.whatsapp.net' : msg.key.participant || msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');
    const groupMetadata = isGroup ? await getGroupMetadata(sock, from) : null;

    // Kunyakua maandishi (Body)
    let body = '';
    if (content.conversation) body = content.conversation;
    else if (content.extendedTextMessage) body = content.extendedTextMessage.text || '';
    else if (content.imageMessage) body = content.imageMessage.caption || '';
    else if (content.videoMessage) body = content.videoMessage.caption || '';
    
    body = (body || '').trim();

    // KIINI CHA TATIZO: Hakikisha amri inasomwa hata kama ni DM au Group
    const prefix = config.prefix || '.';
    const isCmd = body.startsWith(prefix);
    if (!isCmd) return;

    const args = body.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();
    const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    // Utekelezaji wa amri
    await command.execute(sock, msg, args, {
      from,
      sender,
      isGroup,
      groupMetadata,
      isOwner: isOwner(sender),
      isAdmin: await isAdmin(sock, sender, from, groupMetadata),
      isBotAdmin: await isBotAdmin(sock, from, groupMetadata),
      isMod: isMod(sender),
      reply: (text) => sock.sendMessage(from, { text }, { quoted: msg }),
      react: (emoji) => sock.sendMessage(from, { react: { text: emoji, key: msg.key } })
    });

  } catch (error) {
    console.error('Error in message handler:', error);
  }
};

// ... (Kodi nyingine zote za handleGroupUpdate, isOwner n.k ziendelee hapa chini kama zilivyokuwa)
