import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', () => {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    return gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));