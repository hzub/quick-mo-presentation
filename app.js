angular
.module('testApp', [])
.controller('testCtrl', ($scope) => {
  $scope.elements = [];

  $scope.add = () => {
    $scope.elements.push(`Element ${$scope.elements.length + 1}`);
  };
});
