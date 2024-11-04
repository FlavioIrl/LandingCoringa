const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}



exports.default = gulp.parallel(styles, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
    gulp.watch('./src/imagens/*', gulp.parallel(imagens));
}
