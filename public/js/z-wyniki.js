
//var param;

function myFunction(a) {

const func = require('./func.js');

 console.log('wszystkie razem noch einmal->', param);
  console.log('mmtom  ', func.MMTOMETERS);
  console.log('params ->', param.mz, ' ', param.cechaB);
  console.log('aa ',a);


  var b = param.b, sz = param.sz, otulina = param.otulina, blad = param.blad,
  fis = param.fis, fi = param.fi, mz = param.mz, klbetonu = param.klbetonu,
  klStali = param.klStali, cechaB = param.cechaB;
 console.log('tu - >',klStali,' ', cechaB,' ',klbetonu) ;

  //console.log('stała ' , MMTOMETERS);
  //document.forms['formula'].submit();
  //document.forms['e2'].submit();
  //document.getElementById("formula").submit();
  //const form = document.querySelector('formula');
  //const data = Object.fromEntries(new FormData(formula).entries());
  //const data1 = Object.fromEntries(new FormData(e2).entries());

  //var d = MMTOMETERS * (parseFloat(hbelki) - parseFloat(otulina) - parseFloat(blad) - parseFloat(fis) - parseFloat(fi * 0.5));
  var fcd = 13.0;

 //Tabelas data
  var klbetC = ["C12/15", "C16/20", "C20/25", "C25/30", "C30/37", "C35/45", "C40/50", "C45/55", "C50/60", "C55/65", "C60/70"]
  var klbet = [];
  klbet[0] = [];
  klbet[1] = [];
  klbet[2] = [];
  klbet[3] = [];

  klbet[0] = ['15', '20', '25', '30', '37', '45', '50', '55', '60', '65', '70'];
  klbet[1] = ['12', '16', '20', '25', '30', '35', '40', '45', '50', '55', '60'];
  klbet[2] = ['8.0', '10.6', '13.3', '16.7', '20.0', '23.3', '26.7', '30.0', '33.3', '36.7', '40.0'];
  klbet[3] = ['6.7', '8.9', '11.1', '13.9', '16.7', '19.4', '22.2', '25.0', '27.8', '30.6', '33.3'];

  var fyd2 = [190, 210, 310, 350, 420, 435];
  var milim = [0.428, 0.423, 0.399, 0.390, 0.374, 0.371];
  var ksilim = [0.787, 0.769, 0.693, 0.667, 0.625, 0.617];
  var omega;

  var gStali = ["St0S0-b", "St3SX-b", "St3SY-b", "St3S-b", "PB 240", "St50B", "18G2-b", "20G2Y-b", "25G2S", "35G2Y", "34GS", "RB400", "RB400W",
    "20G2VY-b", "RB500", "RB500 W"
  ];
  var fyk = [220, 240, 240, 240, 240, 355, 355, 355, 395, 410, 410, 400, 400, 490, 500, 500];
  var fyd = [190, 210, 210, 210, 210, 310, 310, 310, 350, 350, 350, 350, 350, 420, 420, 420];

  //var e2value = document.querySelector('input[name="klbetonu"]:checked').value;

  //func.setCookie("klbetonu", e2value, 12);
  var ind = klbetC.findIndex(k => k == klbetonu);
  //fck here gains a value
  var fck = klbet[1][ind];

  // var klStali = document.querySelector('input[name="klS"]:checked').value;
  // var cechaB = document.querySelector('input[name="cechab"]:checked').value;
  //
  // func.setCookie("cechaB", cechaB, 12);
  // func.setCookie("klStali", klStali, 12);

  //reseting some cookies
  // console.log('cookie b ',req.cookie.hbelki);
  // var b = func.getCookie('hbelki');
  // func.setCookie('b',b,12);
  // var sz = func.getCookie('szbelki');
  // func.setCookie('d',d,12);
  // var otulina = func.getCookie('otulina');
  // var blad = func.getCookie('blad');
  // var fis = func.getCookie('fis');
  // var fi = func.getCookie('fi');
  // var mz = func.getCookie('mz');
  // var klbetonu = func.getCookie('klbetonu');




  var rBet = ['Wytrzymałość gwarantowana fG c,cube', 'Wytrzymałość charakterystyczna fck',
    'Wytrzymałość obliczeniowa fcd(beton zbrojony)', 'Wytrzymałość obliczeniowa f*cd (beton niezbrojony)'
  ];

  d = func.MMTOMETERS * (parseFloat(b) - parseFloat(otulina) - parseFloat(blad) - parseFloat(fis) - (parseFloat(fi)*0.5));
  var d_h_minus_a = d;
  console.log('d i d_h_minus_a = ', d);
  var fcd = klbet[2][func.findIndex(klbetonu, klbetC)];



  var mi = (parseFloat(mz)) / (func.MMTOMETERS * parseFloat(sz) * d * d * 0.85 * parseFloat(fcd));
  var Fyd = fyd[func.findIndex(klStali, gStali)];
  var Fyk = fyk[func.findIndex(klStali, gStali)];
  console.log('Fyd ->  ' + Fyd);
  console.log('fyd2  ' + fyd2);
  console.log('fyd2 length  ' + fyd2.length);
  console.log('findIndex od 210  - > ' + func.findIndex(210, fyd2));
  if (0 < func.findIndex(Fyd, fyd2) && func.findIndex(Fyd, fyd2) < 5) console.log('in range = ' + func.findIndex(Fyd, fyd2));
  else console.log('out of range ' + func.findIndex(Fyd, fyd2));
  var ksi_lim = ksilim[func.findIndex(Fyd, fyd2)];
  var mi_lim = milim[func.findIndex(Fyd, fyd2)];

  if (mi <= mi_lim) omega = 0.973 - Math.sqrt((0.947 - 1.95 * mi));
  else omega = ((1 - ksi_lim) / ksi_lim) * [Math.pow(0.973 - Math.sqrt(0.947 - 1.95 * mi), 2) / (Math.sqrt(0.947 - 1.95 * mi) - 0.164)];
  var As1 = (omega * func.MMTOMETERS * parseFloat(sz) * d) * ((0.85 * fcd) / Fyd);
  var As1min = (0.6 * (func.MMTOMETERS * parseFloat(sz)) * d) / Fyk;
  As1min2 = 0.0015 * (func.MMTOMETERS * parseFloat(sz)) * d;
  var max = Math.max(As1, As1min, As1min2);

  // func.setCookie("fck", fck, 12);
  // func.setCookie("d_h_minus_a", d_h_minus_a, 12);
  // func.setCookie("As1", As1, 12);
  // func.setCookie("mi", mi, 12);

 return param = {
 'b': b,
 'sz': sz,
 'otulina': otulina,
 'blad': blad,
 'fis': fis,
 'fi': fi,
 'fcd': fcd,
 'mz': mz,
 'klbetonu': klbetonu,
 'cechaB': cechaB,
 'klStali': klStali,
 'fck': fck,
 'd_h_minus_a': d_h_minus_a,
 'As1': As1,
 'Asmax': max,
  'mi': mi
 }

//console.log('tu som parametry:',param);


  // func.setCookie("fck", fck, 12);
  // func.setCookie("b", data.hbelki, 12);
  // func.setCookie("d", data.szbelki, 12);
  // func.setCookie("d_h_minus_a", d_h_minus_a, 12)
  // func.setCookie("otulina", data.otulina, 12);
  // func.setCookie("fck", fck, 12);
  // func.setCookie("mz", data.mz, 12);
  //
  // func.setCookie("fi", data.fi, 12);
  // func.setCookie("fis", data.fis, 12);
  // func.setCookie("blad", data.blad, 12);
  // func.setCookie("As1", As1, 12);
  // func.setCookie("mi", mi, 12);
  //func.setCookie("klbetonu", data1.klbetonu, 12);


  // var wynikiS = '';
  //
  // wynikS = 'Parametry:' + '<br>' +
  //   'hBelki=' + datax.hBelki + '<br>' +
  //   'szBelki=' + datax.szBelki + '<br>' +
  //   'otulina=' + datax.otulina + '<br>' +
  //   'fi=' + datax.fi + '<br><br>' +
  //   'Obliczono:' + '<br>' +
  //   'mi=' + datax.mi + '<br>' +
  //   'As1=' + datax.As1 + '<br>';
  // $("#wyniki_3").html(wynikS);



// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM ready!");
//   var klbetonu = "C12/15";
//
//   $(str).prop('checked', true);
//
//   setInputs("b", "hbelki");
//   setInputs("d", "szbelki");
//   setInputs("otulina", "otulina");
//   setInputs("blad", "blad");
//   setInputs("fi", "fi");
//   setInputs("fis", "fis");
//   setInputs("mz", "mz");
//   setInputsbyName("klbetonu", "klbetonu");
//   setInputsbyName("cechaB", "cechab");
//   setInputsbyName("klStali", "klS");
//
//
// });

}

module.exports = myFunction;
