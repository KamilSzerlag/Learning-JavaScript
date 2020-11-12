var fs = require('fs');
var data = require("./data");

const getUserById = (id, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const user = data.users.find(user => user.id === id)
    cb(user)
  }, 150)
};

const getPostsForUser = (userId, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const posts = data.posts.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
};

module.exports = {getPostsForUser, getUserById};