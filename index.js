'use strict';
var filterUtils = angular.module('filterUtils',[]);
/**
* formater timestamps to UTC
* @input string format, default is "MM/dd/yyyy"
*/
filterUtils.filter('timestamp', ['$filter', function ($filter) {
   return function (input, format) {
      if (typeof format === 'undefined')
         format = 'MM/dd/yyyy';

      return $filter('date')(new Date(input * 1000 ), format).toUpperCase();
   };
}])
/**
* formater percentage
* @input number of decimals, default is one
*/
.filter('percentage', ['$filter', function ($filter) {
   return function (input, decimals) {
      if (typeof decimals === 'undefined')
         decimals = 1;

      return $filter('number')(input * 100, decimals);
   };
}]);
