import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import { deleteSync as del } from 'del';
import sass from 'sass';
const initedSass = gulpSass(sass);
import plumber from 'gulp-plumber';


gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
        .pipe(plumber({ errorHandler: error }))
        .pipe(initedSass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    console.log('watch');
    del(['./css/main.css']);
    console.log('watch');
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});


gulp.task('default', gulp.series('watch'));