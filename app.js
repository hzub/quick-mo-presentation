angular
.module('testApp', [])
.controller('testCtrl', ($scope) => {
  $scope.elements = [];

  $scope.add = () => {
    $scope.elements.push(`Element ${$scope.elements.length + 1}`);
  };
});


// ----------------------------

function onMutateCallback(mutationList) {

  mutationList.forEach(function(mutation) {
    console.log('====== Mutation ========');
    console.log('Type: ', mutation.type);
    console.log('Added nodes: ', mutation.addedNodes);
    console.log('Target: ', mutation.target);
  });

}

const ourContainer = document.querySelector('.container');
const ourMutationObserver = new MutationObserver(onMutateCallback);

ourMutationObserver.observe(ourContainer, {
  attributes: true,
  childList: true,
  characterData: true,
});