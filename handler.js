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

const groupMetadataCache = new Map();
const CACHE_TTL = 60000; 
const commands = loadCommands();

// --- SEHEMU YA KUCHUJA MESEJI ---
const getMessageContent = (msg) => {
  if (!msg || !msg.message) return null;
  let m = msg.message;
  if (m.ephemeralMessage) m = m.ephemeralMessage.message;
  if (m.viewOnceMessageV2) m = m.viewOnceMessageV2.message;
  if (m.viewOnceMessage) m = m.viewOnceMessage.message;
  if (m.documentWithCaptionMessage) m = m.documentWithCaptionMessage.message;
  return m;
};

const getGroupMetadata = async (sock, groupId) => {
  try {
    if (!groupId || !groupId.endsWith('@g.us')) return null;
    if (groupMetadataCache.has(groupId)) return groupMetadataCache.get(groupId);
    const metadata = await sock.groupMetadata(groupId);
    groupMetadataCache.set(groupId, metadata);
    return metadata;
  } catch (error) { return null; }
};

const isOwner = (sender) => {
  const senderNumber = sender.split('@')[0].split(':')[0];
  return config.ownerNumber.includes(senderNumber);
};

const isAdmin = async (sock, participant, groupId, groupMetadata = null) => {
  if (!participant || !groupId || !groupId.endsWith('@g.us')) return false;
  let liveMetadata = groupMetadata || await getGroupMetadata(sock, groupId);
  if (!liveMetadata || !liveMetadata.participants) return false;
  const found = liveMetadata.participants.find(p => p.id.split('@')[0] === participant.split('@')[0]);
  return found?.admin === 'admin' || found?.admin === 'superadmin';
};

const isBotAdmin = async (sock, groupId) => {
  if (!sock.user || !groupId.endsWith('@g.us')) return false;
  return await isAdmin(sock, sock.user.id, groupId);
};

const isMod = (sender) => {
  const number = sender.split('@')[0];
  return database.isModerator(number);
};

// --- MAIN HANDLER INAYOJIBU MENU ---
const handleMessage = async (sock, msg) => {
  try {
    if (!msg.message) return;
    const from = msg.key.remoteJid;
    if (from.includes('@broadcast') || from.includes('@newsletter')) return;

    const content = getMessageContent(msg);
    if (!content) return;

    const sender = msg.key.fromMe ? sock.user.id.split(':')[0] + '@s.whatsapp.net' : msg.key.participant || msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');
    const groupMetadata = isGroup ? await getGroupMetadata(sock, from) : null;

    let body = (content.conversation || content.extendedTextMessage?.text || content.imageMessage?.caption || content.videoMessage?.caption || '').trim();

    const prefix = config.prefix || '.';
    if (!body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();
    const command = commands.get(commandName);


    if (!command) return;

    // Execute Command
    await command.execute(sock, msg, args, {
      from, sender, isGroup, groupMetadata,
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

// --- MIFUMO MINGINE YA ULINZI (HII NDIO ILIKUWA NYINGI) ---
const handleGroupUpdate = async (sock, update) => { /* Welcome/Goodbye logic */ };
const handleAntilink = async (sock, msg, groupMetadata) => { /* Antilink logic */ };
const handleAntigroupmention = async (sock, msg, groupMetadata) => { /* Anti-tag logic */ };
const initializeAntiCall = (sock) => { /* Anticall logic */ };

// --- SEHEMU MUHIMU YA MWISHO ---
module.exports = {
  handleMessage,
  handleGroupUpdate,
  handleAntilink,
  handleAntigroupmention,
  initializeAntiCall,
  isOwner,
  isAdmin,
  isBotAdmin,
  isMod,
  getGroupMetadata
};
