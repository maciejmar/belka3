
const app = require('./app');
app.set('port', 8084);

const server2 = app.listen(app.get('port'), () => {
		console.log(`I'am setted on port ${ server2.address().port }`);
});
