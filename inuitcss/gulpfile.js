const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

/*
 * @styles(js)
 * 
 */
gulp.task('clean-styles', del.bind(null, ['.styles']));
gulp.task('styles', ['clean-styles'], function () {
  return gulp.src('./main.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe($.rename('main.css'))
    .pipe(gulp.dest('.styles/'))
    .pipe($.rename('.inuitcss.css'))
    .pipe(gulp.dest('../src/'))
    .pipe(reload({stream: true}));
});

/*
 * @svg(js)
 * 
 */
gulp.task('clean-svg', del.bind(null, [ 'svg/.symbol', 'svg/.compressed']));
gulp.task('svg', ['clean-svg'], function () {
  return gulp.src('svg/src/**/*.svg')
    .pipe(svgo())
    .pipe(svgSprite({
      shape: {
        dimension: {
          maxWidth: 30,
          maxHeight: 30
        },
        spacing: {
          padding: 0
        },
        dest: '.compressed' // Keep the intermediate files
      },
      mode: {
        symbol: {
          dest: '.symbol',
          example: true
        }
      }
    }))
    .pipe(gulp.dest('svg'))
});

/*
 * @serve(js)
 * 
 */
gulp.task('serve', function () {
  
  runSequence(['svg'], ['styles'], function () {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.styles', '_dev', 'svg'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });
    
    gulp.watch([
      '_dev/**/*.html',
      '_dev/**/*.js'
    ]).on('change', reload);
    
    gulp.watch('**/*.scss', ['styles']);
    gulp.watch('svg/src/**/*.svg', ['svg']);
    
  });
  
});

/*
 * @watch(js)
 * 
 */
gulp.task('watch', function () {
  runSequence(['svg'], ['styles'], function () {
    gulp.watch('**/*.scss', ['styles']);
    gulp.watch('svg/src/**/*.svg', ['svg']);
  });
});