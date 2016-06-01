var app = angular.module("serviceApp", []);

app.controller("ServiceController", function($scope){

    $scope.product = services;
    $scope.total = 0;
    $scope.serviceCount = 0;

    $scope.setActive = function (service) {
        if (service.active === false) {
            service.active = true;
            $scope.total += service.price;
            $scope.serviceCount += 1;

            return 'green';
        }
        service.active = false;
        $scope.total -= service.price;
        $scope.serviceCount -= 1;

        return '';

     }


});

	var services = [
{
    name: 'Web Development',
    price: 300,
    active:true
},{
    name: 'Design',
    price: 400,
    active:false
},{
    name: 'Integration',
    price: 250,
    active:false
},{
    name: 'Formation',
    price: 220,
    active:false
}
];
