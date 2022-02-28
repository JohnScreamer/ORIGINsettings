import fileinclude from "gulp-file-include";
// import gulpVersionNumber from "gulp-version-number";
// import gulpWebpHtmlNosvg from "gulp-webp-html-nosvg"; 



export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
         })
      ))
      
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, '/src/img/'))
      // .pipe(gulpWebpHtmlNosvg())
      // .pipe(
      //    gulpVersionNumber({

      //       'value': '%DT%',
      //       'append': {
      //          'key': '_v',
      //          'cover': 0,
      //          'to': [
      //             'css',
      //             'js',
      //          ],

      //       },
      //       'output': {
      //          file: 'gulp/version.json'
      //       }
      //    }))
      .pipe(app.gulp.dest(app.path.build.html))
}