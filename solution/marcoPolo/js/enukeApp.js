angular.module('enukeApp', [])
        .filter('marcopolo', function () {
            return function (input) {
                var output = input;
                if (input % 4 === 0 && input % 7 === 0) {
                    return 'marcopolo';
                }
                if (input % 4 === 0) {
                    return 'marco';
                }
                if (input % 7 === 0) {
                    return 'polo';
                }
                return output;
            };

        })
        .controller('mainCtrl', function ($scope) {
            $scope.protoArray = new Array(100);

        });