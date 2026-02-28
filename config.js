/**
 * Global Configuration for WhatsApp MD Bot
 * FULL PRO SETUP - Kila kitu kimejumuishwa
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

    // ORODHA YA MATUSI (Imewekwa kwenye kodi ya kudumu)
    badwords: ['kuma', 'msenge', 'unafilwa', 'katombwe', 'katiwe', 'kundu', 'kubabako', 'kumamako', 'nguruwe', 'mbwa'],
    
    // Bot Behavior (Akili ya Bot)
    selfMode: false, 
    autoRead: true, 
    autoTyping: true, 
    autoBio: true, 
    autoSticker: false,
    autoReact: true, 
    autoReactMode: 'bot', 
    autoDownload: false,
    
    // Group Settings Defaults (ULINZI KAMILI)
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete',
      antibadword: true,
      antibadwordAction: 'kick',
      anticall: true,
      
      // Mipangilio ya Kukaribisha na Kuaga
      welcome: true, 
      detect: true, 
      welcomeMessage: 'Karibu @user kwenye kundi letu la @group! 👋\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Zuwa Bot*',
      goodbye: true,
      goodbyeMessage: 'Kwaheri @user, tutakukumbuka! 💀',
      
      // Mipangilio ya Kuona Meseji Zilizofutwa na View Once
      antiviewonce: true, 
      antidelete: true,     
      
      
      // Ulinzi Mwingine
      antitag: false,
      antitagAction: 'delete',
      antiall: false,
      antibot: false,
      antigroupmention: false,
      antigroupmentionAction: 'delete',
      antiSpam: false,
      nsfw: false,
      chatbot: false,
      autosticker: false 
    },
    
    // API Keys (Ili bot isikwame)
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration (Ujumbe wa Bot kwa Kiswahili)
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
    
    // Timezone & Limits
    timezone: 'Africa/Dar_es_Salaam', 
    maxWarnings: 3,
    
    // Social Links
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/'
    }
};
