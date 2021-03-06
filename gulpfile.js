const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('build', function () {
  return gulp.src('./array-includes.js')
    .pipe(uglify())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['build'], function () { });