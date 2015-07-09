'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AuthorsBooksCtrl(BooksService, $stateParams) {

    var vm = this;

    var author = $stateParams.author;
    //initialize all vars for view
    var init = function(){
        vm.all = BooksService.getByAuthor(author);
        console.log(vm.all);
    };
    init();

    vm.delete = function(id){
        BooksService.removeBook(id);
        init();
    };
}

controllersModule.controller('AuthorsBooksCtrl', AuthorsBooksCtrl);