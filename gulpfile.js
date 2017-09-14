var gulp = require('gulp');
var browserSync = require('browser-sync').create();



gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'widget'
        }
    })
});

gulp.task('start', ['browserSync'], function (){
    gulp.watch('widget/*.html', browserSync.reload);
    gulp.watch('widget/*.css', browserSync.reload);
    gulp.watch('widget/scripts/*.js', browserSync.reload);
});
