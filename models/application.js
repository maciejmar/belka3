const bookshelf = require('../config/bookshelf');
const Application = bookshelf.Model.extend({
  tableName: 'new_table'
});

module.exports.create = (application) => {
  return new Application({

    param: application.param,
    value: application.value,
    caseName: application.caseName

  }).save();
};
