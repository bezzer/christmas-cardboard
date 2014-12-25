var connect = require('gulp-connect'),
    gulp = require('gulp'),
    sass = require('gulp-sass');
    
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: '9000',
    livereload: {port: 36789}
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./src/stylesheets/*.css')
  .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/stylesheets/*.css'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('static', ['connect']);