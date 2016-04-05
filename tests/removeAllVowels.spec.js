describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all vowels in a given string', function(){
    var testString = "I am learning how to test javascript filters";
    var results = $filter('removeAllVowels')(testString);
    expect(results).toEqual(" m lrnng hw t tst jvscrpt fltrs");
  });

});
