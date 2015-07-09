'use strict';

var controllersModule = require('./_index');

function BooksAddCtrl(BooksService, AuthorsService, $state, AppSettings) {
    var vm = this;

    vm.all = BooksService.getBooks();
    vm.authors = AuthorsService.getAuthors();
    vm.patterns = AppSettings.patterns;

    vm.submit = function () {
        BooksService.addBook(vm.new);
        vm.all = BooksService.getBooks();
        $state.go('books');
    };
}

controllersModule.controller('BooksAddCtrl', BooksAddCtrl);