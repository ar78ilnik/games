import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {
            sourcemaps: app.isDev
        })
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(app.gulp.dest(app.path.build.scss))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.scss))
        .pipe(app.plugins.browserSync.stream());
}