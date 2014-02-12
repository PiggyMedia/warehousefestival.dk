/*global require, console*/

var gulp = require('gulp');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var styl = require('gulp-styl');
var concat = require('gulp-concat');
var jsonminify = require('gulp-jsonminify');
var csso = require('gulp-csso');
var refresh = require('gulp-livereload');
var header = require('gulp-header');
var lr = require('tiny-lr');
var server = lr();

var banner = [
    '/**',
    ' * Warehouse Festival',
    ' * @author tcarlsen',
    ' * @version v0.1.0',
    ' */',
    ''
].join('\n');

gulp.task('lr-server', function () {
    'use strict';
    
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err);
        }
    });
});

gulp.task('scripts', function () {
    'use strict';
    
    gulp.src(['app/js/*.js'])
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(header(banner))
        .pipe(gulp.dest('build'))
        .pipe(refresh(server));
});

gulp.task('styles', function () {
    'use strict';
    
    gulp.src(['app/css/*.css'])
        .pipe(concat('styles.min.css'))
        .pipe(styl())
        .pipe(csso())
        .pipe(gulp.dest('build'))
        .pipe(refresh(server));
});

gulp.task('html', function () {
    'use strict';

    gulp.src(['app/index.html'])
        .pipe(gulp.dest('build'))
        .pipe(refresh(server));
    
    gulp.src(['app/partials/*.html'])
        .pipe(gulp.dest('build/partials'))
        .pipe(refresh(server));
});

gulp.task('json', function () {
    'use strict';
    
    gulp.src(['app/json/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('build/json'))
        .pipe(refresh(server));
});

gulp.task('lib', function () {
    'use strict';
    
    gulp.src(['app/lib/**'])
        .pipe(gulp.dest('build/lib'))
        .pipe(refresh(server));
});

gulp.task('images', function () {
    'use strict';
    
    gulp.src(['app/img/**'])
        .pipe(gulp.dest('build/img'))
        .pipe(refresh(server));
});

gulp.task('default', function () {
    'use strict';
    
    gulp.run('lr-server', 'scripts', 'styles', 'html', 'json', 'lib', 'images');

    gulp.watch('app/js/**', function (event) {
        gulp.run('scripts');
    });

    gulp.watch('app/css/**', function (event) {
        gulp.run('styles');
    });
    
    gulp.watch(['app/index.html', 'app/partials/*.html'], function (event) {
        gulp.run('html');
    });
    
    gulp.watch('app/lib/**', function (event) {
        gulp.run('lib');
    });
});