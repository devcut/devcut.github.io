'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shell = require('gulp-shell');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('assets/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('mustache', shell.task('yarn build'));

gulp.task('watch', function () {
  gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch(['templates/**/*.mustache', 'data/*.json'], gulp.series('mustache'));
});