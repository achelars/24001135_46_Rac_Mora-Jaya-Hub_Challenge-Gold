const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Mora Jaya Hub API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
