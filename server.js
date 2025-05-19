import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

// Replace these with your actual Telegram bot details
const token = '7377528114:AAHLkBhDzwzCsAm7-r-FGNY5JVObHPjgio4';
const chatId = '757627221';

app.get('/send', async (req, res) => {
  const message = '🚀 Alexa trigger received via Render!';

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message
    });

    res.send('✅ Message sent to Telegram!');
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send('❌ Failed to send message');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
