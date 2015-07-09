'use strict';

var controllersModule = require('./_index');


function AuthorsCtrl(AuthorsService) {

    var vm = this;
    //initialize all vars for view
    var init = function(){
        vm.all = AuthorsService.getAuthors();
    };
    init();
}

controllersModule.controller('AuthorsCtrl', AuthorsCtrl);