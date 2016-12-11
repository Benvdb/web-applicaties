describe('MainCtrl', function () {
    var scope, ctrl;

    beforeEach(module('flapperNews'));

    beforeEach(inject(function ($rootScope, $controller) {


        var mockPosts = {
            posts: [
                {
                    title: 'test',
                    link: 'http://test.com',
                    comments: [],
                    upvotes: 3
                }
            ]
        };
       

        var mockAuth = {
            isLoggedIn: false
        };

        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {
            $scope: scope,
            auth: mockAuth,
            posts: mockPosts
            
        });
    
    }));

    it('alle posts worden geladen', function () {
        expect(scope.posts.length).toBe(1);
    });

    it('gebruiker is uitgelogd', function () {
        expect(scope.isLoggedIn).toBe(false);
    });

    
    
    
  
});