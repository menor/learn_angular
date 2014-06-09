var myApp = angular.module( "myApp", [] );

myApp.factory('Data', function(){
  return { message: "I'm data from a service." };
});

var firstController = function( $scope, Data ){
  $scope.data = Data;
};

var secondController = function( $scope, Data ){
  $scope.data = Data;
  $scope.reverse = function( message ){
    return message.split('').reverse().join('');
  };
};