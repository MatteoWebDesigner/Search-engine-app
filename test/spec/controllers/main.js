'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('searchEngineApp'));

    var MainCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('check default values', function() {
        expect(scope.Products).toEqual([]);
        expect(scope.lengthResults).toEqual(0);
        expect(scope.numberSearchDone).toEqual(0);
        expect(scope.loading).toEqual(false);
    });

});
