describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should return only persons with given favorite food, ice cream', function(){
    var mockUsers = [
    {
      name: "John Doe",
      favoriteFood: "ice cream"
    },
    {
      name: "Steve Jobs",
      favoriteFood: "apple"
    },
    {
      name: "Peter Piper",
      favoriteFood: "ice cream"
    }
    ]


    var results = $filter('favoriteFood')(mockUsers, "ice cream");
    expect(results.length).toEqual(2);
    expect(results[1].name).toEqual("Peter Piper");
  });
	
});
