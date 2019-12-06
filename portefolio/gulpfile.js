'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('assets/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify().on('error', function(e){
      console.dir(e);
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/**/*.js', gulp.series('js'));
});