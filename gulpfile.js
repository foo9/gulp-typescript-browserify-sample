'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var jsSrcPath = './src/js';
var jsDestPath = './dist/js';

function jscompile(isWatch) {
    var bundler;
    var rebundle;
    var rebundleWithUglify;

    if (isWatch) {
        bundler = watchify(browserify(jsSrcPath + '/app.js'));
    } else {
        bundler = browserify(jsSrcPath + '/app.js');
    }

    function rebundleWithUglify() {
        return bundler
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(jsDestPath));
    }

    function rebundle() {
        return bundler
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(gulp.dest(jsDestPath));
    }

    bundler.on('update', function() {
        rebundle();
        rebundleWithUglify();
    });

    bundler.on('log', function(message) {
        console.log(message);
    });

    return rebundle();
}

gulp.task('browserify', function() {
    return jscompile(false);
});

gulp.task('watchify', function() {
    return jscompile(true);
});

gulp.task('watch', ['watchify'], function() {
});
