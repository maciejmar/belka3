const MMTOMETERS = 0.001;

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}

function setInputs(cookie, input) {
if (getCookie(cookie)!=null) {
    var inputs = document.getElementById(input);
    inputs.value =getCookie(cookie);
  }
  else setCookie(cookie,"0",12);
}



function setInputsbyName(cookie, input) {
if (getCookie(cookie)!=undefined) {
    var inputs = document.getElementsByName(input);
    console.log('cookie---klbetonu ---'+ getCookie(cookie));
    var valueToSet = getCookie(cookie);
    //valueToSet="C12/15";
    console.log("inputs="+ inputs[0].value+" "+inputs[1].value);
    console.log("valueToSet ",valueToSet);

    for (var i=0;i<inputs.length;i++)
      if (inputs[i].value==valueToSet){
        inputs[i].checked=true;
        var str=inputs[i].id;
        break;
      }
      else {
      console.log('');

    }
  }
}


    function findIndex (value, tab){
         console.log ("value=     "+value+"   tab= "+tab);
        for (i=0;i<tab.length;i++) {
        if( value.toString().localeCompare(tab[i].toString()) === 0) return i;
        }
        return -1;
    }



     module.exports.MMTOMETERS = MMTOMETERS;
     module.exports.findIndex = findIndex;
     module.exports.getCookie = getCookie;
     module.exports.setCookie = setCookie;
     module.exports.setInputs = setInputs ;
     module.exports.setInputsbyName = setInputsbyName;
