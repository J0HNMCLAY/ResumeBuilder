
//-App module
var CV_App = angular.module('CV_BuilderApp', []);

//-Controller
CV_App.controller('CV_Controller', ($scope) => {

    //-Shorthand
    $s = $scope;



    //*Testing...
    $s.Test_Content = {
        ID   : 'Details',
        Name : 'John McLay',
        DOB  : '07/07/1988',
        Occupation : 'IT Consultant'
    };


});