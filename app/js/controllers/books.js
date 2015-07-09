'use strict';

var controllersModule = require('./_index');

function BooksCtrl(BooksService) {
    var vm = this;

    //initialize all vars for view
    var init = function(){
        vm.all = BooksService.getBooks();
    };
    init();

    vm.delete = function(id){
        BooksService.removeBook(id);
        init();
    };
}

controllersModule.controller('BooksCtrl', BooksCtrl);