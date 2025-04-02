// lib/cronWorker.js
const cron = require('node-cron');
const fetch = require('node-fetch');

// Schedule tasks to be run on the server
cron.schedule('0 0 * * *', async function() {
  console.log('Running daily cron job');
  
  try {
    const response = await fetch(`${process.env.APP_URL}/api/cron`, {
      headers: {
        'Authorization': `Bearer ${process.env.CRON_SECRET}`
      }
    });
    
    const data = await response.json();
    console.log('Cron job result:', data);
  } catch (error) {
    console.error('Cron job failed:', error);
  }
});