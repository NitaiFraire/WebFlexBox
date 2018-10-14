/* comunicar gulpfile con package.json */

const gulp = require('gulp'),
    saas = require('gulp-sass'),
    autoPrefix = require('gulp-autoprefixer');

/* crear tareas */

/* Se crea funcion 
   -ruta del archivo 
   -pipe que es lo que va a hacer cada tarea*/

gulp.task('sass', () => {
    gulp.src('scss/app.scss')
        .pipe(autoPrefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(saas({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('carrito/css'));
});

/* cada que se ejecute watch, saas tambien lo hara */

gulp.task('watch', ['sass'], () => {
    gulp.watch(['scss/*.scss'], ['sass']);
});