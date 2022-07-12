window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
    console.log('client-side code running');

var buttons = document.querySelectorAll('.menu_buttons');

var length = buttons.length;
for(var i = 0;i<length;i++){
  buttons[i].addEventListener('submit', function() {


    console.log('button nacisniety = ', this.name, ' name= ',this.value);
    var name =  this.name ;
    var value = this.value;
    var data = {name, value};

    const response = fetch('/api', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',

          },
      body: JSON.stringify(data)
    }).then(response => {
      console.log('response is here --- ',response.body);
      //console.log('data =',data);
    });

});
}


});
