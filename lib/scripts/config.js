var appConfig;


(function() {
	var dev = false;
	var paths;
	
	if(dev) {
		paths = {
			homeImage: "img/tent-small.png",
			appCss: "app.js",
			appJs: "app.js"
		}
	}
	else {
		paths= {
			homeImage: "content/img/tent-small.png",
			appCss: "dist/app.js",
			appJs: "dist/app.js"
		}
	}
	
	if(true)
	{
		var dog = "rawr";
	}
	appConfig = {
		paths: paths
	};
}());