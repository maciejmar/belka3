exports.menu = (req,res) => {
  res.render('menu', {
    formMessage: 'hello!'

  });
};
exports.zginanie = (req,res) => {
  res.render('zginanie', {
    title: 'Node'
  });
};
exports.form2 = (req,res) => {
  res.render('form2', {
    title: 'Node'
  });
}

exports.typwyt = (req,res) => {
  res.render('typwyt', {
    title: 'Node'
  });
}
exports.klStali = (req,res) => {
  res.render('klStali', {
    title: 'Node'
  });
}
