var myApp = angular.module( "myApp", [] );

myApp.factory('Data', function(){
  return { message: "I'm data from a service." };
});

myApp.filter( 'reverse', function( Data ){
  return function( text ){
    return text.split('').reverse().join('') + Data.message ;
  };
});

var firstController = function( $scope, Data ){
  $scope.data = Data;
};

var secondController = function( $scope, Data ){
  $scope.data = Data;
};