const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Comment extends Model { }

Comment.init({
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
  username: {
    Type: DataTypes.STRING,
    allowNull: false
  }
}, {sequelize, modelName: 'comment'})

module.exports = Comment