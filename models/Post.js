const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

// created post model
class post extends Model { }

post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize, modelName: 'post' })

module.exports = post