'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var bower        = require('gulp-bower');

gulp.task('bower', function () {
    return bower(config.bower.src)
        .pipe(gulp.dest(config.bower.dest));
});