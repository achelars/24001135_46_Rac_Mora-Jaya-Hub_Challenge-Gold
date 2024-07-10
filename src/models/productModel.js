const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://username:password@localhost:5432/mora_jaya_hub');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Product;
