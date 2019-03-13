var gulp = require('gulp');
var concat=require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default',function(){
	return gulp.src('src/**')
	         //.pipe(concat('application.js'))
	        // .pipe(gulp.dest('./'))
	          .pipe(minify())
	          .pipe(gulp.dest('./TargetFolder'))
});