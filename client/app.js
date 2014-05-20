var messapp = angular.module('messapp', [])
  .controller('infotoggle', function($scope){
    $scope.showinfo = false;
    $scope.toggleinfo = function(){
      this.showinfo = !this.showinfo;
    };
  });