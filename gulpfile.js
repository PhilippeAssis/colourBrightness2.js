var gulp = require('gulp')
var minify = require('gulp-minify')

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