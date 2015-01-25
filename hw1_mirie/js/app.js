/**
 * app.js
 * Contains the Model and Controller for the HW1 App.
 */

// Model
var hw1App = angular.module('hw1App', []);

// Controller
hw1App.controller('BeerCtrl', function ($scope) {
  // Variables for the cost example
  $scope.price = 5;
  $scope.quantity = 3;

  // Variables for the beer song example.
  $scope.total = 3;
  $scope.count = 1;
  $scope.beers = [$scope.count];

  /**
   * Prepares the variables to use for the next refrain.
   */
  $scope.nextRefrain = function() {
    $scope.count++;
    if ($scope.count <= ($scope.total + 1)) {
      $scope.beers.push($scope.count);
    }
  }

  /**
   * Resets the variables to start from the beginning of the song.
   */
  $scope.reset = function() {
    $scope.total = 3;
    $scope.count = 1;
    $scope.beers = [$scope.count];
  }

  /**
   * Returns total based on the given index.
   *
   * @param int index
   *   The given index
   */
  $scope.getTotal = function(index) {
    return $scope.total - index;
  }
});