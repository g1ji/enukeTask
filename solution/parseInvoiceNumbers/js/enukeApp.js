angular.module('enukeApp', [])
        .directive('fileModel', ['$parse', function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        var model = $parse(attrs.fileModel);
                        var modelSetter = model.assign;
                        element.bind('change', function () {
                            scope.$apply(function () {
                                modelSetter(scope, element[0].files[0]);
                            });
                        });
                    }
                };
            }])
        .controller('mainCtrl', function ($scope) {
//            g1jiHashMapLogic 
//            010
//            101
//            111
//
//            000
//            001
//            001
//
//            010
//            011
//            110
//
//            010
//            011
//            011
//
//            000
//            111
//            001
//
//            010
//            110
//            011
//
//            010
//            110
//            111
//
//            010
//            001
//            001
//
//            010
//            111
//            111
//
//            010
//            111
//            011
            var g1jiHashMap = {
                175: 0,
                9: 1,
                158: 2,
                155: 3,
                57: 4,
                179: 5,
                183: 6,
                137: 7,
                191: 8,
                187: 9
            };
            $scope.parseInvoiceNumbers = function () {
                $scope.uploading = true;
                var file = $scope.myFile;
                console.log(file);
                if (file.type !== 'text/plain') {
                    alert("invalid file !");
                    return true;
                }
                var reader = new FileReader();

                reader.onload = function (e) {
                    var lines = reader.result.split("\n");
                    var rowInvoiceNumber = [];
                    var rowInvoiceNumbers = [];
                    lines.forEach(function (line) {
//                        if (line.length) {
                        if (rowInvoiceNumber.length !== 3) {
                            rowInvoiceNumber.push(line.split(''));
                        } else {
                            rowInvoiceNumbers.push(rowInvoiceNumber);
                            rowInvoiceNumber = [];
                        }
//                        }
                    });
                    rowInvoiceNumbers.forEach(function (rowInvoice) {
                        var nvoiceNumber = '';
                        while (rowInvoice[0].length) {
                            var hash = [];
                            hash = rowInvoice[0].splice(0, 3);
                            hash = hash.concat(rowInvoice[1].splice(0, 3));
                            hash = hash.concat(rowInvoice[2].splice(0, 3));
                            hash = binaryEncode(hash);
                            nvoiceNumber += g1jiHashMap[parseInt(hash, 2)];
                        }
                        console.log(nvoiceNumber);
                    });
                };
                reader.readAsText(file);
                function binaryEncode(arr) {
                    var binaryStr = '';
                    arr.forEach(function (char) {
                        binaryStr += char === ' ' ? 0 : 1;
                    });
                    return binaryStr;
                }
            };
        });