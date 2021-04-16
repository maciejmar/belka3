const knex =  require('knex')(require('./knexfile'));
const bookshelf = require('bookshellf')(knex);

module.exports = bookshelf;
