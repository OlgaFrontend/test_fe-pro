var gulp = require('gulp');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('jade', function(){
	gulp.src('./src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
})

gulp.task('css', function(){
	gulp.src('./src/*.css')
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('./dist'))
})

gulp.task('script', function(){
	gulp.src('./src/*.js')
	.pipe(gulp.dest('./dist'))
})

gulp.task('img', function(){
	gulp.src('./src/img/*')
	.pipe(gulp.dest('./dist/img'))
})

gulp.task('watch', function() {
	gulp.watch('./src/*.jade', ['jade'])
	gulp.watch('./src/*.css', ['css'])
	gulp.watch('./src/*.js', ['script'])
	gulp.watch('./src/img/*', ['img'])
});

gulp.task('default', ['jade', 'watch', 'css', 'script', 'img'])