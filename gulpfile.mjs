import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', () => {
    return gulp.src(paths.sass + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.webroot + 'css/'));
});

gulp.task('watch', () => {
    return gulp.watch('_config/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));