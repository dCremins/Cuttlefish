var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/assets/sass/**/[^_]*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('app/assets/sass/**/[^_]*.scss',['styles']);
});
