describe('PostsCtrl', function () {
    var scope, ctrl;

    beforeEach(module('flapperNews'));

    beforeEach(inject(function ($rootScope, $controller) {

var mockComment1 = {
   comments: [
        {
            body: 'commentBody',
            author: 'testUser',
            upvotes: 7
        }
    ]
};
var mockComment2 = {
   comments: [
        {
            body: 'commentBody',
            author: 'testUser',
            upvotes: 7
        }
    ]
};
var mockPost = {
                    title: 'test',
                    link: 'http://test.com',
                    comments: [mockComment1,mockComment2],
                    upvotes: 3
};

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
        ctrl = $controller('PostsCtrl', {
            $scope: scope,
            auth: mockAuth,
            posts: mockPosts,
            post: mockPost
        });
    
    }));



it('aantal comments bij een post is correct',function(){
    expect(scope.post.comments.length).toBe(2);
});
    
    
    
  
});