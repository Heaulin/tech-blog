const User = require('./User.js')
const Post = require('./Post.js')
const Comment = require('./Comment.js')

User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, {foreignKey: 'uid' })

User.hadMany(Comment, { foreignKey: 'uid' })
Post.hasMany(Comment, { foreignKey: 'postId'})

Comment.belongsTo(User, {foreignKey: 'uid' })

module.exports = { User, Post, Comment }