var appConfig;


(function() {
	var dev = false;
	var paths;
	
	if(dev) {
		paths = {
			contentPath: "",
			libPath: ""
		}
	}
	else {
		paths= {
			homeImage: "content/",
			libPath: "lib/"
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