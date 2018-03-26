var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
	console.log('hurray!');
});

gulp.task('html', function(){
	console.log('html yay!');
});

gulp.task('styles', function(){
	console.log('css yay!');
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});