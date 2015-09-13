(function () {
	"use strict";

	angular.module("tentmakingApp")
		.controller("HomeCtrl", [HomeCtrl]);

	function HomeCtrl() {
		var vm = this;
		vm.title = "Adventures in Tentmaking";
	};
} ());