'use strict';
var angular = require('angular');
var app = angular.module('starkAPP', ['baseService']);

app.controller('mainController', ['$scope', 'BaseService', '$http',
    function($scope, BaseService, $http) {

        $scope.mail = {};
        $scope.sender = [];
        $scope.singleSender = {};
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

        $scope.submitAll = function() {
            var params = {
                sender: $scope.sender,
                mail: $scope.mail,
                target: target
            };
            $http.post('/sendAll', params).
            success(function(data) {
                if (data.success) {
                    alert('搞定！');
                } else {
                    alert('有一些问题额...只完成了' + data.complete + '个邮箱');
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


        $scope.values = [{
            id: 1,
            label: '15级1组（500人）',
            subItem: {
                target: ['mail_2015',0]
            }
        }, {
            id: 2,
            label: '15级2组（500人）',
            subItem: {
                target: ['mail_2015',1]
            }
        },
        {
            id: 3,
            label: '15级3组（500人）',
            subItem: {
                target: ['mail_2015',2]
            }
        },
        {
            id: 4,
            label: '15级4组（500人）',
            subItem: {
                target: ['mail_2015',3]
            }
        },{
            id: 5,
            label: '15级5组（500人）',
            subItem: {
                target: ['mail_2015',4]
            }
        },{
            id: 6,
            label: '15级6组（500人）',
            subItem: {
                target: ['mail_2015',5]
            }
        },{
            id: 7,
            label: '15级7组（77人）',
            subItem: {
                target: ['mail_2015',6]
            }
        },{
            id: 8,
            label: '14级1组（500人）',
            subItem: {
                target: ['mail_2014',0]
            }
        },{
            id: 9,
            label: '14级2组（500人）',
            subItem: {
                target: ['mail_2014',1]
            }
        },{
            id: 10,
            label: '14级3组（500人）',
            subItem: {
                target: ['mail_2014',2]
            }
        },{
            id: 11,
            label: '14级4组（500人）',
            subItem: {
                target: ['mail_2014',3]
            }
        },{
            id: 12,
            label: '14级5组（500人）',
            subItem: {
                target: ['mail_2014',4]
            }
        },{
            id: 13,
            label: '14级6组（451人）',
            subItem: {
                target: ['mail_2014',5]
            }
        },{
            id: 14,
            label: '13级1组（500人）',
            subItem: {
                target: ['mail_2013',0]
            }
        },{
            id: 15,
            label: '13级2组（500人）',
            subItem: {
                target: ['mail_2013',1]
            }
        },{
            id: 16,
            label: '13级3组（500人）',
            subItem: {
                target: ['mail_2013',2]
            }
        },{
            id: 17,
            label: '13级4组（500人）',
            subItem: {
                target: ['mail_2013',3]
            }
        },{
            id: 18,
            label: '13级5组（500人）',
            subItem: {
                target: ['mail_2013',4]
            }
        },{
            id: 19,
            label: '13级6组（499人）',
            subItem: {
                target: ['mail_2013',5]
            }
        },{
            id: 20,
            label: '12级1组（500人）',
            subItem: {
                target: ['mail_2012',0]
            }
        },{
            id: 21,
            label: '12级2组（500人）',
            subItem: {
                target: ['mail_2012',1]
            }
        },{
            id: 22,
            label: '12级3组（500人）',
            subItem: {
                target: ['mail_2012',2]
            }
        },{
            id: 23,
            label: '12级4组（500人）',
            subItem: {
                target: ['mail_2012',3]
            }
        },{
            id: 24,
            label: '12级5组（500人）',
            subItem: {
                target: ['mail_2012',4]
            }
        },{
            id: 25,
            label: '12级6组（500人）',
            subItem: {
                target: ['mail_2012',5]
            }
        },{
            id: 26,
            label: '12级7组（159人）',
            subItem: {
                target: ['mail_2012',6]
            }
        }];

        $scope.submit = function() {
            console.log($scope.selected.target,$scope.singleSender,$scope.mail);
            var params = {
                sender: $scope.singleSender,
                mail: $scope.mail,
                target: $scope.selected.target
            }
            $scope.loader = true;
            $http.post('/send', params).
            success(function(data) {
                $scope.loader = false;
                if(data.success){
                    alert('发送成功！');
                }else{
                    alert('有些问题，只成功了一部分/w\\');
                }
            }).
            error(function(data) {
                $scope.loader = false;
                alert('error!');
            });
        }



    }
]);


angular.module('baseService', []).factory('BaseService', ['$rootScope', '$http',
    function($rootScope, $http) {
        return {}
    }
])
