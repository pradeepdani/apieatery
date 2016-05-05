var userid = context.getVariable('username');
var password = context.getVariable('password');

var credentials = {
	"userid": userid,
	"password": password  
};

context.setVariable('bootcamp.credentials.json', JSON.stringify(credentials));