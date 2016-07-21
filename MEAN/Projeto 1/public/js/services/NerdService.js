angular.modules("NerdService", []).factory('Nerd', ['$http', function($http){

    return {
        get: function(){
            return $http.get('/api/nerds'); 
        },

//useless for now
        create: function(nerdData){
            return $http.post('/api/nerds', nerdData);
        },

        delete: function(id){
            return $http.delete('/api/nerds/' + id);
        }
    }
}]);