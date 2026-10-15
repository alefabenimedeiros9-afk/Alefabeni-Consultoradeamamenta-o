// Exemplo opcional de backend Node.js + Express. Instale: npm install express cors
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.post('/api/contact', (req, res) => {
  const { name, phone, topic, message = '' } = req.body || {};
  if (!name || !phone || !topic) return res.status(400).json({ error: 'Nome, telefone e assunto são obrigatórios.' });
  // TODO: validar e proteger contra abuso; salvar somente com base legal e política de privacidade.
  // Não registrar dados sensíveis em logs.
  return res.status(202).json({ received: true, message: 'Contato recebido para processamento.' });
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API iniciada na porta ${port}`));
