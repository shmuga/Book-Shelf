'use strict';

/**
 * @ngInject
 *
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    var isHtml5 = $locationProvider.html5Mode();
    if (angular.isObject(isHtml5)) {
        isHtml5 = isHtml5.enabled;
    }

    $stateProvider
        .state('books', {
            url: '/books',
            controller: 'BooksCtrl as books',
            templateUrl: 'books.html',
            title: 'Books list'
        })

        .state('booksAdd', {
            url: '/books/add',
            controller: 'BooksAddCtrl as booksAdd',
            templateUrl: 'books_add.html',
            title: 'Book add'
        })

        .state('booksEdit', {
            url: '/books/edit/:id',
            controller: 'BooksEditCtrl as booksEdit',
            templateUrl: 'books_edit.html',
            title: 'Book edit'
        })

        .state('authors', {
            url: '/authors',
            controller: 'AuthorsCtrl as authors',
            templateUrl: 'authors.html',
            title: 'Authors list'

        })

        .state('authorsBooks', {
            url: '/author/:author',
            controller: 'AuthorsBooksCtrl as authorsBooks',
            templateUrl: 'authors_books.html',
            title: 'Authors books'
        });


    $urlRouterProvider.otherwise('/books');

}

module.exports = OnConfig;