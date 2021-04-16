
const myFunction = require('../public/js/z-wyniki.js');
console.log('applicationsController was trigged');

exports.datatoweb = (req,res) => {
    console.log('this is req -> ', req.body);
    const a = req.body;
    const b = req.body;

    for(var prop in a){
      console.log("the text is ",prop,' and value = ',a[prop]);
    }
    res.render(prop);
};

exports.validate = (req,res,next) =>{

  console.log('----- We now in validate middleware -----');
  var data = req.body;
  var validation = true;
  for (var key in data) {

    if(data.hasOwnProperty(key)){
      let val = data[key];
      if (parseFloat(val).toString()!=val && val !='OBLICZ'){
        console.log("Comma not allowed!!!");
        validation = false;
      }
      console.log(key + ' -> '+ val+ ',  '+ parseFloat(val));
      if(isNaN(parseFloat(val) )&& val!='OBLICZ'){
        console.log('Błędne dane -',parseFloat(val));
        validation = false;
      }
    }
  }
  if (validation) next();
  else res.render('zginanie', {
      title: 'Node'
  });

};


exports.store = (req, res) => {
    console.log('we are in store action');
    //console.log('req  ',req.body, ' ',req);
    const data = req.body;
    console.log('req.session ->', req.body);
    console.log('req.cookie ->',req.cookies);
    res.cookie('hbelki',req.body.hbelki );
    res.cookie('szbelki',req.body.szbelki);
    res.cookie('otulina',req.body.otulina);
    res.cookie('blad', req.body.blad);
    res.cookie('fi',req.body.fi);
    res.cookie('fis',req.body.fis);
    res.cookie('mz',req.body.mz)
    //res.send('cookie was setted');

    res.render('form2', {
        title: 'Node'
    });
};

exports.datatoweb2 = (req,res) => {
console.log('jesteśmy w form2 - czyli klbetonu ');
res.cookie('klbetonu',req.body.klbetonu);
console.log('klbetonu -',req.body.klbetonu.toString());
res.render('typwyt', {
    title: 'Node'
});
}

exports.datatoweb3 = (req,res) => {
console.log('jesteśmy w typwyt');
res.cookie('cechaB', req.body.cechab);
console.log('cechab -', req.body.cechab.toString());
res.render('klstali', {
    title: 'Node'
});

}

exports.datatoweb4 = (req,res,next) => {
console.log('jesteśmy w klstali');
res.cookie('klStali', req.body.klS);
console.log('klstali - ', req.body.klS.toString());

next();
};

exports.calculate = (req,res) => {
  console.log('and finaly we in calculate module');
 //calculating and saving in session
 console.log('cookie -> ', req.cookies.cechaB);
 console.log('cookie2 -> ' , req.cookies.mz);
param = {
'b': req.cookies.hbelki,
'sz': req.cookies.szbelki,
'otulina': req.cookies.otulina,
'blad': req.cookies.blad,
'fis': req.cookies.fis,
'fi': req.cookies.fi,
'fcd': req.cookies.fcd,
'mz': req.cookies.mz,
'klbetonu': req.cookies.klbetonu,
'cechaB': req.cookies.cechaB,
'klStali': req.cookies.klStali
}
// console.log('wszystkie razem ->', param);
const param1 = myFunction(5);
console.log('param tu ---', param1);

var wynikiS = '';

 wynikS = 'Parametry:' + '<br>' +
   'hBelki=' + param1.b + '<br>' +
   'szBelki=' + param1.d + '<br>' +
   'otulina=' + param1.otulina + '<br>' +
   'fi=' + param1.fi + '<br><br>' +
   'Obliczono:' + '<br>' +
   'mi=' + param1.mi + '<br>' +
   'As1=' + param1.As1 + '<br>';
   res.render('wyniki', {
       title: 'Node'
   });

}
