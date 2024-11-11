const express = require('express');
const fetch = require('node-fetch'); // Usa node-fetch para hacer la solicitud HTTP
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/tripo3d', async (req, res) => {
  const apiKey = 'tsk_WWQzAjAiX4ajZ9Hr1Zmvusf7xEUhYDJnNTiE_0rcNVK';
  const apiUrl = 'https://api.tripo3d.ai/v2/openapi/task';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error en la solicitud' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});