var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify');


gulp.task('sass', function(){
    return gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('lint', function() {
    return gulp.src(['./app/*/*.js', './app/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js', function () {
    return gulp.src(['./app/*/*.js', './app/*.js'])
        //.pipe(browserify())
        //.pipe(uglify())
        //.pipe(gulp.dest('./app/build'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['js'], function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch('app/styles/*.scss', ['sass']);
    gulp.watch(["app/*.html", "app/*/*.html"]).on('change', browserSync.reload);
    gulp.watch(['./app/*/*.js', './app/*.js'], ['js']);
});

