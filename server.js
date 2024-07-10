const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('mora_jaya_hub', 'mora_user', 'user1234', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Mora Jaya Hub API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
