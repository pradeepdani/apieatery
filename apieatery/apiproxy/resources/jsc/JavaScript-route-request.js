 try{
  var new_target = "http://httpbin.org/get";
  context.setVariable("target.url", new_target);
}catch(e){
	throw e;
}