/**
 * Global Configuration for WhatsApp MD Bot
 * Full Setup by Zuwa Bot Owner
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['255745363380'], 
    ownerName: ['Zuwa Bot Owner'], 
    
    // Bot Configuration
    botName: 'Zuwa Bot', 
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363161513685998@newsletter',
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip',
    
    // Sticker Configuration
    packname: 'Zuwa Bot Pack',
    author: 'Zuwa Bot',

    // ORODHA YA MATUSI (Iliyoombwa na User)
    badwords: ['kuma', 'msenge', 'unafilwa', 'katombwe', 'katiwe', 'kundu', 'kubabako', 'kumamako', 'nguruwe', 'mbwa'],
    
    // Bot Behavior
    selfMode: false, 
    autoRead: true, 
    autoTyping: true, 
    autoBio: true, 
    autoSticker: false,
    autoReact: true, 
    autoReactMode: 'bot', 
    autoDownload: false,
    
    // Group Settings Defaults (Ulinzi Kamili)
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete',
      antibadword: true,
      antibadwordAction: 'kick',
      anticall: true,
      welcome: true, 
      detect: true,
      welcomeMessage: 'Karibu @user kwenye kundi letu la @group! 👋\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Zuwa Bot*',
      goodbye: true,
      goodbyeMessage: 'Kwaheri @user, tutakukumbuka! 💀',
      antitag: false,
      antitagAction: 'delete',
      antiall: false,
      antiviewonce: false,
      antibot: false,
      antigroupmention: false,
      antigroupmentionAction: 'delete',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      chatbot: false,
      autosticker: false 
    },
    
    // API Keys (Zikiwa tupu kuzuia makosa ya uandishi)
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration (Kiswahili)
    messages: {
      wait: '⏳ Tafadhali subiria kidogo...',
      success: '✅ Imekamilika!',
      error: '❌ Hitilafu imetokea!',
      ownerOnly: '👑 Amri hii ni kwa ajili ya mmiliki wa bot pekee!',
      adminOnly: '🛡️ Amri hii ni kwa ajili ya Ma-admin wa kundi pekee!',
      groupOnly: '👥 Amri hii inatumika kwenye makundi pekee!',
      privateOnly: '💬 Amri hii inatumika kwenye chat binafsi pekee!',
      botAdminNeeded: '🤖 Ili nifanye hivi, lazima niwe Admin wa kundi!',
      invalidCommand: '❓ Amri haijatambulika! Andika .menu upate msaada'
    },
    
    // Timezone
    timezone: 'Africa/Dar_es_Salaam', 
    
    // Limits
    maxWarnings: 3,
    
    // Social Links
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/'
    }
};
