'use strict';

var AppSettings = {
    appTitle: 'Book Shelf',
    //patterns for form validation
    patterns: {
        title: /^[a-zA-Z\.\,\!\s]+$/,
        year: /^[0-9]+$/
    }
};

module.exports = AppSettings;