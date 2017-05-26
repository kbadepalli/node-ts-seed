var gulp = require('gulp');
var ts = require('gulp-typescript');
var JSON_FILES = ['src/*.json', 'src/**/*.json'];
// pull in the project TypeScript config
var tsProject = ts.createProject('tsconfig.json');
gulp.task('scripts', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});
gulp.task('watch', ['scripts'], function () {
    gulp.watch('src/**/*.ts', ['scripts']);
});
gulp.task('assets', function () {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['watch', 'assets']);
