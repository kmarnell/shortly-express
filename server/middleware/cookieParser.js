

const parseCookies = (req, res, next) => {
	if(req.headers.cookie === undefined) {
		return {};
	} else {
		var parsed = req.headers.cookie.split(";")
 		var cookies = {};
  	
  	for(var i = 0; i < parsed.length; i++) {  
  		key = parsed[i].split("=")[0];
  		value = parsed[i].split("=")[1];
  		
  		console.log("KEY", key)
  		console.log("VALUE", value)
  		
  		cookies[key] = value;
    };
    console.log("COOKIES", cookies)
		
	}

	next();

};

module.exports = parseCookies;