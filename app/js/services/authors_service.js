'use strict';

var servicesModule = require('./_index.js');

function AuthorsService($localStorage) {

    var list = function () {
        var authors = [
            {
                name: 'Suzanne Collins',
                img: 'http://www.hungergamesdwtc.net/wp-content/uploads/2014/08/collins.jpg'
            },
            {
                name: 'J.K. Rowling',
                img: 'http://aidanmoher.com/blog/wp-content/uploads/2015/06/JK-Rowling-JK.jpg'
            },
            {
                name: 'Harper Lee',
                img: 'http://media.indiatimes.in/media/content/2013/May/harper_lee_1367735346_540x540.jpg'
            },
            {
                name: 'Stephenie Meyer',
                img: 'http://latimesherocomplex.files.wordpress.com/2008/08/stepheniemeyer.jpg'
            },
            {
                name: 'Jane Austen',
                img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Jane_Austen_coloured_version.jpg'
            }
        ];

        //getting count for each author
        authors.map(function(obj){
            obj.count = $localStorage.books.filter(function(book){
                return book.author.indexOf(obj.name) !== -1;
            });
            obj.count = obj.count.length;
            return obj;
        });
        return authors;
    };

    return {
        getAuthors: list
    };
}

servicesModule.service('AuthorsService', AuthorsService);