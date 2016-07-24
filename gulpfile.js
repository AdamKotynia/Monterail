var gulp = require('gulp'),
    sass = require('gulp-sass'),
    //webserver = require('gulp-webserver'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    uniq = require('uniq');


//gulp.task('webserver', function () {
//    gulp.src('app')
//        .pipe(webserver({
//            open: true
//        }));
//
//});

gulp.task('sass', function(){
    return gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(['./app/*/*.js', './app/*.js'])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./app/*.js'));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('lint', function() {
    return gulp.src(['./app/*/*.js', './app/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch('app/styles/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

