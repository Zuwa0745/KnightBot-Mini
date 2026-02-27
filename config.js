 /**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['255745363380'], // Namba yako ya TZ iliyorekebishwa
    ownerName: ['Zuwa Bot Owner'], 
    
    // Bot Configuration
    botName: 'Zuwa Bot', // Jina jipya la bot yako
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363161513685998@newsletter',
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip',
    
    // Sticker Configuration
    packname: 'Zuwa Bot Pack',
    
    // Bot Behavior (Nimeziwasha baadhi ili bot ichangamke)
    selfMode: false, 
    autoRead: true, // Isome meseji zenyewe
    autoTyping: true, // Ionyeshe "typing..." ukituma amri
    autoBio: true, // Ibadilishe bio ya WhatsApp yenyewe
    autoSticker: false,
    autoReact: true, // Itoe reaction zenyewe
    autoReactMode: 'bot', 
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete',
      antitag: false,
      antitagAction: 'delete',
      antiall: false,
      antiviewonce: false,
      antibot: false,
      anticall: true, // Iweke true kuzuia watu wasikupigie simu botini
      antigroupmention: false,
      antigroupmentionAction: 'delete',
      welcome: true, // Iweke true ili ikaribishe watu wapya
      welcomeMessage: 'Karibu @user kwenye kundi letu la @group! 👋\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Zuwa Bot*',
      goodbye: false,
      goodbyeMessage: 'Kwaheri @user, tutakukumbuka! 💀',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false 
    },
    
    // API Keys
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration (Kwa Kiswahili kidogo)
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
    timezone: 'Africa/Dar_es_Salaam', // Iwekwe Tanzania kulingana na eneo lako
    
    // Limits
    maxWarnings: 3,
    
    // Social Links
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/'
    }
};
 
