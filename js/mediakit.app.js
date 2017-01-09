angular.module('mediakit', [
	'mediakit.controllers',
	'mediakit.directives',
	'mediakit.services',
	'ngRoute'
])

.config(function($routeProvider, $compileProvider, $mdThemingProvider) {
	$routeProvider
	.when("/", { templateUrl: "html/home.html", controller: "homeCtrl" })
	.when("/metricas", { templateUrl: "html/metrics.html", controller: "metricsCtrl" })
	.when("/web", { templateUrl: "html/web.html", controller: "webCtrl" })
	.when("/apps", { templateUrl: "html/apps.html", controller: "appsCtrl" })
	.when("/social", { templateUrl: "html/social.html", controller: "socialCtrl" })
	.otherwise({ redirectTo: '/' });
	
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);

	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey', {
			default: '500',
			'hue-1': '800',
			'hue-2': '200',
			'hue-3': '100'
		})
		.accentPalette('blue', {})
		.warnPalette('pink', {});
});