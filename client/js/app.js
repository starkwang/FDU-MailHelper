'use strict';
var angular = require('angular');
var app = angular.module('starkAPP', ['baseService']);

app.controller('mainController', ['$scope', 'BaseService', '$http',
    function($scope, BaseService, $http) {

        $scope.mail = {};
        $scope.sender = [];
        var target = [];
        $scope.gradeChange = function() {
            var total = 0;
            $scope.sender = [];
            target = [];
            if ($scope.grade12) {
                total += 3159;
                target.push('mail_2012');
            }
            if ($scope.grade13) {
                total += 2999;
                target.push('mail_2013');
            }
            if ($scope.grade14) {
                total += 2951;
                target.push('mail_2014');
            }
            if ($scope.grade15) {
                total += 3077;
                target.push('mail_2015');
            }
            var needAmount = Math.ceil(total / 500);

            for (var i = 0; i < needAmount; i++) {
                $scope.sender.push({
                    user: '',
                    pass: ''
                });
            }
        }

        $scope.submit = function() {
            var params = {
                sender: $scope.sender,
                mail: $scope.mail,
                target: target
            };
            $http.post('/send', params).
            success(function(data) {
                if(data.success){
                    alert('搞定！');
                }else{
                    alert('有一些问题额...只完成了'+data.complete+'个邮箱');
                }
            }).
            error(function(data) {
                alert('error!');
            });
            // var complete = 0;
            // for (var i = 0; i < 5; i++) {
            //     $http.post('/send', params).
            //     success(function(data) {
            //         complete++;
            //         console.log(complete);
            //     });
            // }

        }


    }
]);


angular.module('baseService', []).factory('BaseService', ['$rootScope', '$http',
    function($rootScope, $http) {
        return {}
    }
])
