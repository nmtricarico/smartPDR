const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

