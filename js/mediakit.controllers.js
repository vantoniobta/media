angular.module('mediakit.controllers', ['ngMaterial', '720kb.socialshare'])
//Default controller
.controller('mediakitCtrl', function($scope, $location, $anchorScroll, $window) {
	$scope.sidenavIsOpen = false;
	$scope.sidenavToggle = function() {
		$scope.sidenavIsOpen = !$scope.sidenavIsOpen;
	};
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};
	$scope.open = function(url) {
		window.open(url, '_blank');
	};
})

.controller('homeCtrl', function($scope, $location, $window) {
	$scope.data = {
	};
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};
})

.controller('metricsCtrl', function($scope, $location, $window) {
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};


		      //google api chart    REGION
			  google.charts.load('current', {'packages':['corechart']});
		      google.charts.setOnLoadCallback(drawChart);
		      function drawChart() {
		        // type ----->PieChart,LineChart,ColumnChart
		        var data = google.visualization.arrayToDataTable([
		          ['', ''],
		          ['Nuevo León',      75],
		          ['Tamaulipas',       5],
		          ['Coahuila',         5],
		          ['Ciudad de México', 5],
		          ['Otros',            10],
		        ]);
		        var options = {
		          colors:['#F9DE2F','#B4EC99', '#10B0BB', '#fc9826', '#E22D66'],
		          is3D:true
		        };
		        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		        chart.draw(data, options);


	         //redes sociales
	            var a = google.visualization.arrayToDataTable([
	              ['Day/Month',          'Facebook', 'Twitter','Youtube','Instagram'],
			      ['MultimediosTV',          1382983,    1509706,  597451,   276485],
			      ['Telediario',             469384,     929494,   3350,     12703],
			      ['Multimedios Deportes',   195853,     133177,   29316,    2299],
			    ]);
	             var a1 = {
					     chart: {
				            title: 'Company Performance',
				            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
				          },
				          bars: 'horizontal', // Required for Material Bar Charts.
				          hAxis: {format: 'decimal'},
				          height: 400,
				          colors: ['#3293DF', '#add3f2', '#e55906']
					    };
				  var chart0 = new google.visualization.ColumnChart(document.getElementById('ax'));
				  chart0.draw(a, a1);


		        //....PAIS

		        var pais = google.visualization.arrayToDataTable([
		        	     ['Element', '', { role: 'style'}],
				         ['México', 90, '#b87333'],            // RGB value
				         ['Estados Unidos', 9, 'silver'],            // English color name
				         ['Otros',1, 'gold']
		         	]);
		         var xy = {
		          	 colors: ['#e5cb00', '#24669c','#5699CF'],
					    width: 900,
					    height:500,
					    is3D:true
		             }
		         var pdc = new google.visualization.ColumnChart(document.getElementById('pais'));
				     pdc.draw(pais, xy);
					        //....PAIS
			      }  //find function


	$scope.data = {
		stats: {
			multimedios: {
				uniqueusers: '3,120,868',
				visits: '8,280,386',
				pageviews: '15,754,345',
				time: '00:04:22'
			},
			app: {
				uniqueusers: '60,033',
				visits: '541,841',
				pageviews: '2,096,762',
				time: '00:04:47'
			},
			multimedia: {
				tv: '266,979',
				vod: '3,313,885',
				time: '00:39:00',
				youtube: '14+ Millones'
			},
			age: [
				{ name: '6-14', value: 7 },
				{ name: '15-24', value: 23 },
				{ name: '25-34', value: 20 },
				{ name: '35-44', value: 28 },
				{ name: '45-54', value: 14 },
				{ name: '55+', value: 8 }
			],
			gender: {
				male: { name: 'Hombre', value: 49 },
				female: { name: 'Mujer', value: 51 }
			},
		}
	};
})

.controller('formatCtrl', function($scope, $mdDialog, format, color) {
	$scope.format = format;
	$scope.color = color;
    $scope.cancel = function() {
        $mdDialog.hide();
    };
	$scope.openDemo = function(demo) {
		window.open(demo, '_blank');
	}
})

.controller('webCtrl', function($scope, $mdDialog, $location, $window) {
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};
	$scope.openFormat = function(format, e, color) {
		$mdDialog.show({
            controller: 'formatCtrl',
            templateUrl: 'html/format.html',
            parent: angular.element(document.body),
            targetEvent: e,
            clickOutsideToClose:true,
			locals: {
				format: format,
				color: color
			}
        })
	};

	$scope.data = {
		formats: [
			{
				name: 'Header',
				type: 's', //s, rm, v
				size: '970x90px',
				filesize: '200 kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_header.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				html5: true
			},
			{
				name: 'Header expandible',
				type: 'rm', //s, rm, v
				size: '970x90px a 970x400px (max.)',
				filesize: '200kb + 200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_header_expandible.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Entregar la creatividad expandida y contraida en dos archivos separados. De ser necesario, la lógica para expandir y contraer la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Box banner',
				type: 's', //s, rm, v
				size: '300x250px',
				filesize: '200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_bigbox.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				html5: true
			},
			{
				name: 'Box banner expandible',
				type: 'rm', //s, rm, v
				size: '300x250px a 600x500px (max.)',
				filesize: '200kb + 200k',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_bigbox_expandible.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Entregar la creatividad expandida y contraida en dos archivos separados. De ser necesario, la lógica para expandir y contraer la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Leaderboard',
				type: 's', //s, rm, v
				size: '728x90px',
				filesize: '200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_leaderboard.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				html5: true
			},
			{
				name: 'Leaderboard expandible',
				type: 'rm', //s, rm, v
				size: '728x90px a 728x400px (max.)',
				filesize: '200kb + 200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_leaderboard_Expandible.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Entregar la creatividad expandida y contraida en dos archivos separados. De ser necesario, la lógica para expandir y contraer la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Smart banner',
				type: 's', //s, rm, v
				size: '200x90px',
				filesize: '80kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_smartbanner.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				html5: true
			},
			{
				name: 'Takeover',
				type: 'rm', //s, rm, v
				size: '780x380px',
				filesize: '300kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_takeover.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'De ser necesario, la lógica para mostrar y ocultar la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Takeover con video',
				type: 'v', //s, rm, v
				size: '780x380px (img) + 640x480px (vid.)',
				filesize: '200kb (img) + 30mb (vid.)',
				duration: '30s (max.)',
				fileformat: '.jpg, .png (img) + .mp4, .avi (vid.)',
				img: 'Generico_Home_takeover_video.jpg',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'La creatividad se compone de una imagen de fondo y un reproductor de video. La imagen debe tener un espacio destinado para la impresión del reproductor de video. De ser necesario, la lógica para mostrar y ocultar la creatividad flotante pueden ser implementados por el medio.',
				html5: false
			},
			{
				name: 'Pre-roll',
				type: 'v', //s, rm, v
				size: '640x480px',
				filesize: '30mb',
				duration: '30s (max.)',
				fileformat: '.mp4, .avi',
				img: 'Generico_player_preroll.jpg',
				accepts: 'Trackings de impresión y click (pixel)'
			},
			{
				name: 'Post-roll',
				type: 'v', //s, rm, v
				size: '640x480px',
				filesize: '30mb',
				duration: '30s (max.)',
				fileformat: '.mp4, .avi',
				img: 'Generico_player_preroll.jpg',
				accepts: 'Trackings de impresión y click (pixel)'
			},
			{
				name: 'Video banner',
				type: 'v', //s, rm, v
				size: '640x480px',
				filesize: '30mb',
				duration: '30s (max.)',
				fileformat: '.mp4, .avi',
				img: 'Generico_Home_videobanner.png',
				accepts: 'Trackings de impresión y click (pixel)'
			},
			{
				name: 'Pre-home',
				type: 'rm', //s, rm, v
				size: '800x600px',
				filesize: '300kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_prehome.jpg.png',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'De ser necesario, la lógica para mostrar y ocultar la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Overlay',
				type: 'rm', //s, rm, v
				size: '400x400px',
				filesize: '200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_Overlay.png',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'De ser necesario, la lógica para mostrar y ocultar la creatividad flotante pueden ser implementados por el medio.',
				html5: true
			},
			{
				name: 'Skin',
				type: 'rm', //s, rm, v
				size: '120x600px',
				filesize: '200kb',
				fileformat: '.jpg, .png, .html',
				img: 'Generico_Home_skin.png',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Entregar dos creatividades de acuerdo a lo especificado. La lógica para mostrar la creatividad será implementada por el medio.',
				html5: true
			}
		]
	}
})

.controller('appsCtrl', function($scope, $mdDialog, $location, $window) {
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};
	$scope.openFormat = function(format, e, color) {
		$mdDialog.show({
            controller: 'formatCtrl',
            templateUrl: 'html/format.html',
            parent: angular.element(document.body),
            targetEvent: e,
            clickOutsideToClose:true,
			locals: {
				format: format,
				color: color
			}
        })
	};

	$scope.data = {
		formats: [
			{
				name: 'Launchscreen',
				type: 's', //s, rm, v
				size: 'Android y iPhone 4: 320x460px (+640x920px); iPhone 5: 320x548px (+640x1096px); iPhone 6: 375x647px (+750x1294px); iPhone 6 Plus: 540x940px (+1080x1880px); iPad Landscape: 1024x748px (+2048x1496px); iPad Portrait: 768x1004px (+1536x2008px).',
				filesize: '300 kb',
				fileformat: '.jpg, .png',
				img: 'Iphone_launchscreen.png',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Para su correcta visualización en pantallas de retina se deben entregar las creatividades con las dimensiones al doble (2x) indicadas en el formato: (+000x000px).'
			},
			{
				name: 'Leaderboard',
				type: 's', //s, rm, v
				size: 'Smartphone: 320x50px (+640x100px); Tablet: 728x90px (+1456x180px).',
				filesize: '150kb',
				fileformat: '.jpg, .png',
				img: 'Iphone_leaderboard.png',
				accepts: 'Trackings de impresión y click (pixel)',
				comments: 'Para su correcta visualización en pantallas de retina se deben entregar las creatividades con las dimensiones al doble (2x) indicadas en el formato: (+000x000px).'
			}
		]
	}
})

.controller('socialCtrl', function($scope, $mdDialog, $location, $window) {
	$scope.go = function(_path) {
		$location.path(_path);
		$window.scrollTo(0, 0);
	};
	$scope.openWindow = function(url) {
		window.open(url, '_blank');
	};
	$scope.data = {
		corp: [
			{
				name: 'Multimedios Televisión',
				account: 'multimediostv',
				network: 'f',
				followers: '963928',
				img: './img/social/Zqtt9bIi.jpg',
				cover: './img/social/multimediostv_600x200.png'
			},
			{
				name: 'multimedios tv',
				account: 'multimediostv',
				network: 't',
				followers: '1193313',
				img: './img/social/Zqtt9bIi.jpg',
				cover: './img/social/multimediostv_600x200.png'
			},
			{
				name: 'D99',
				account: 'D99Radio',
				network: 'f',
				followers: '246944',
				img: './img/social/9eUSar_N.jpg',
				cover: './img/social/D99Radio_600x200.png'
			},
			{
				name: 'mmdeportes',
				account: 'MMDEPORTES',
				network: 'f',
				followers: '85400',
				img: './img/social/5WgNmA1Y.jpg',
				cover: './img/social/MMDEPORTES_600x200.jpg'
			}
		],
		top: [
			{
				name: 'Arely Tellez',
				account: '@ArelyTellez',
				followers: '1.31M',
				likes: '877K',
				img: './img/social/tp7nw-ga.jpeg',
				cover: './img/social/ArelyTellez_600x200.jpg'
			},
			{
				name: 'Ernesto Chavana',
				account: '@ErnestoChavana',
				followers: '1.3M',
				likes: '1.28M',
				img: './img/social/BTs0nOma.jpg',
				cover: './img/social/ErnestoChavana_600x200.png'
			},
			{
				name: 'Jazmin Villarreal',
				account: '@JazminconJ',
				followers: '1.27M',
				likes: '95K',
				img: './img/social/mwguC50O.jpg',
				cover: './img/social/JazminconJ_600x200.jpg'
			},
			{
				name: 'Anita González',
				account: '@annagzz',
				followers: '191K',
				likes: '33K',
				img: './img/social/xbHwsviZ.jpg',
				cover: './img/social/annagzz_600x200.jpg'
			},
			{
				name: 'Iván La Mole',
				account: '@lamolechida',
				followers: '267K',
				likes: '255K',
				img: './img/social/59a3338ffa8446478887fe40247e52d1.jpeg',
				cover: './img/social/lamolechida_600x200.jpg'
			},
			{
				name: 'Brandon Meza',
				account: '@brandon_meza',
				followers: '620K',
				img: './img/social/2GLotU-K.jpg',
				cover: './img/social/brandon_meza_600x200.jpg'
			}
		]
	}
});
