angular.module('sparrowFit')
.controller('homeController', homeController)
function homeController(auth) {
  this.auth = auth;
  this.testString = 'this is a home message'
}
