var credentials = context.getVariable('credentials.json');

var creds = JSON.parse(credentials);
context.setVariable('bootcamp.creds', creds);

context.setVariable('username', creds.userid);
context.setVariable('password', creds.password);