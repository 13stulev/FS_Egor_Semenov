let gulp = require("gulp");
let uglify = require("gulp-uglify");
let pipeline = require('readable-stream').pipeline;

gulp.task("js", function () {
    return pipeline(gulp.src("src/*.js"),
        uglify(),
        gulp.dest("destination"))
})