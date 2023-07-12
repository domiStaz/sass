import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import { deleteSync as del } from 'del';
import sass from 'sass';
const initedSass = gulpSass(sass);
import plumber from 'gulp-plumber';

gulp.task('sass', () => {
    return gulp.src('./resources/scss/*.scss')
        .pipe(plumber())
        .pipe(initedSass())
        .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', () => {
    console.log('watch');
    gulp.watch('./resources/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));
