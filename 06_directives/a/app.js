var app = angular.module( "superhero", []);

app.directive( "superman", function(){
  return {
    restrict: "E",
    template: "<div>I was going to be played by Nick Cage</div>"
  };
});