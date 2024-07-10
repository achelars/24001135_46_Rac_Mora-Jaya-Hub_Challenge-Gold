const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); 
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

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

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to sync the database:', error);
});
