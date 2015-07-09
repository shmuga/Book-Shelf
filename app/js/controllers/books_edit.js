'use strict';

var controllersModule = require('./_index');

function BooksEditCtrl(BooksService, AuthorsService, $stateParams, $state, AppSettings) {
    var vm = this;
    var id = $stateParams.id;

    vm.all = BooksService.getBooks();
    vm.authors = AuthorsService.getAuthors();
    vm.patterns = AppSettings.patterns;

    vm.new = angular.copy(vm.all[id]);

    vm.submit = function () {
        BooksService.editBook(id,vm.new);
        $state.go('books');
    };
}

controllersModule.controller('BooksEditCtrl', BooksEditCtrl);