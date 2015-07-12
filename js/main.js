var app = angular.module("appMirhem", []);

app.controller("controllerMirhem", function($scope) {
    $scope.modulos=['Inicio', 'Contacto', 'Mas'];
	
	$scope.templates = [{
        id: 1,
        name: 'Inicio',
        url: 'templates/inicio.html'
    }];
	
	//$scope.template = $scope.templates[ getUrlVar("type") - 1];
	$scope.template = $scope.templates[0];
});

function getUrlVar(vr) {
    var src = String(window.location.href).split('?')[1];
    var vrs = src.split('&');
    for (var x = 0, c = vrs.length; x < c; x++) {
        if (vrs[x].indexOf(vr) != -1) {
            return decodeURI(vrs[x].split('=')[1]);
            break;
        };
    };
}