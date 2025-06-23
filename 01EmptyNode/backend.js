const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received: ${name} - ${email}`);
  res.json({ message: `Thank you, ${name}! We got your email.` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
