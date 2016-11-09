var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var clean = require('gulp-clean');
var minify = require('gulp-minify');


gulp.task('demo', function buildHTML() {
    gulp.src('./*.html')
        .pipe(clean())

    gulp.src('./demo/assets/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))

    gulp.src('./demo/assets/styl/*.styl')
        .pipe(stylus({
             compress: true
        }))
        .pipe(gulp.dest('./demo/public/css'))

    gulp.src('./demo/assets/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./demo/public/js'))
})


gulp.task('default', function(){
    gulp.src('./src/jquery.colourbrightness2.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./dist'))
    
    gulp.src('./src/jquery.colourbrightness.js')
    .pipe(gulp.dest('./dist'))
})