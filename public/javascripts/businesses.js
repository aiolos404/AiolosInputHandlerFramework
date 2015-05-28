var businessInsertion = angular.module('businessInsertion', []);

businessInsertion.controller('BusinesList', function ($scope) {
    $scope.businesses = [
        {
            'name': 'Business Name',//this is the title name which will be displayed at the front pages
            'variable': 'name'//this is the name of variable which will be post to the backend
        },
        {
            'name': 'Business Address',
            'variable': 'address'
        },
        {
            'name': 'Business Locality',
            'variable': 'locality'
        },
        {
            'name': 'Business Region',
            'variable': 'region'
        },
        {
            'name': 'Business Country',
            'variable': 'country'
        },
        {
            'name': 'Business Latitude',
            'variable': 'latitude'
        },        
        {
            'name': 'Business Longitude',
            'variable': 'longitude'
        },      
        {
            'name': 'Business Neighborhood',
            'variable': 'neighborhood'
        },
        {
            'name': 'Business Pricelevel',
            'variable': 'pricelevel'
        },
        {
            'name': 'Business Website',
            'variable': 'website'
        },
        {
            'name': 'Business Email',
            'variable': 'email'
        },
    ];
});




