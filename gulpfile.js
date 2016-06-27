var gulp = require('gulp'),
    sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles/css'))
});
gulp.task('watch', function(){
    gulp.watch('app/styles/*.scss', ['sass']);
});
