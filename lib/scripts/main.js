
(function () {
	"use strict";
	var app = angular.module("tentmakingApp", ["ngRoute"]);
	app.config(["$routeProvider",
    	function ($routeProvider) {
        	$routeProvider
            	.when("/", {
                	templateUrl: appConfig.paths.libPath + "scripts/home/home.html",
                	controller: "HomeCtrl as vm"
                })
                .when("/members", {
                	templateUrl: "members/views/index.html",
                	controller: "IndexCtrl as vm"
                })
                .otherwise("/");
	}]);
} ());