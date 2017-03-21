/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('server', function (done) {
	var server = gls.new('bin/www'); 
  server.start();
   gulp.watch(['views/**/*.*','public/**/*.*'], function (file) {
    server.notify.apply(server, [file]);
  });
});
// Default task
gulp.task('default',  function() {
  gulp.start('server');
  
});

