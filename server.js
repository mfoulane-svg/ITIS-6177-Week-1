const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, World!'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/hello', (req, res) => res.send(`Hello, ${req.query.name || 'there'}!`));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
