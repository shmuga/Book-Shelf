'use strict';

var servicesModule = require('./_index.js');

function BooksService($localStorage) {
    var add = function (item) {
        if ($localStorage.books === undefined) {
            $localStorage.books = [];
        }

        var newItem = angular.copy(item);
        newItem.id = new Date().getTime();

        $localStorage.books.push(newItem);
    };

    var list = function(){
        //if this is first load of page default book will be nice)
        if ($localStorage.books === undefined) {
            $localStorage.books = [{
                title: 'Harry Potter and the Order of the Phoenix',
                year: 2003,
                image: 'https://d.gr-assets.com/books/1387141547l/2.jpg',
                pages: 870,
                author: ['J.K. Rowling']
            }];
        }
        return $localStorage.books;
    };

    var removeAll = function(){
        $localStorage.books = [];
    };

    var remove = function(id){
        $localStorage.books.splice(id, 1);
    };

    var getByAuthor = function(name){
        return $localStorage.books.filter(function(obj){
            return obj.author.indexOf(name) !== -1;
        });
    };

    var edit = function(id,book){
        $localStorage.books[id] = angular.copy(book);
    };

    return {
        addBook : add,
        getBooks: list,
        editBook: edit,
        removeBook: remove,
        removeAll: removeAll,
        getByAuthor: getByAuthor
    };
}

servicesModule.service('BooksService', BooksService);