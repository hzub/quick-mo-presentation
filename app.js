angular
.module('testApp', [])
.controller('testCtrl', ($scope) => {
  $scope.elements = [];

  $scope.add = () => {
    $scope.elements.push(`Element ${$scope.elements.length + 1}`);
  };
});


// ----------------------------

let containerHeight;

function getElementHeight(element) {
  return element.getBoundingClientRect().height;
}

function onMutateCallback(mutationList) {

  mutationList.forEach(function(mutation) {
    for (let i = 0; i < mutation.addedNodes.length; i++) {
      const addedNode = mutation.addedNodes[i];
      if (addedNode.classList && addedNode.classList.contains('element')) {
        console.info('New element added to list!');

        const newContainerHeight = getElementHeight(ourContainer);
        console.info('Old container height: ', containerHeight);
        console.info('New container height: ', newContainerHeight);
      }
    }
  });

}

const ourContainer = document.querySelector('.container');
const ourMutationObserver = new MutationObserver(onMutateCallback);

containerHeight = getElementHeight(ourContainer);

ourMutationObserver.observe(ourContainer, {
  attributes: true,
  childList: true,
  characterData: true,
});