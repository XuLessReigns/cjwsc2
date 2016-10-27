var gulp = require("gulp");
var server = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minify = require("gulp-minify-css");         //css压缩
var imagemin = require("gulp-imagemin");          //图片压缩
var rename = require("gulp-rename");           //对文件进行重命名
var rev = require("gulp-rev");           //给静态资源添加一个hash值后缀
var revCollector = require("gulp-rev-collector");   //根据rev生成的manifest用来替换link的src
var htmlmin = require("gulp-htmlmin");


gulp.task("server",function () {
    server.server({
        root:"dist"
    });
});
gulp.task("html",function () {
    return gulp.src("src/html/*")
        .pipe(htmlmin({
            minifyCSS:true,
            minifyJS:true,
            removeComments:true,
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("dist/html/"));
});
gulp.task("css",function () {
    return gulp.src("src/css/*.css").pipe(minify()).pipe(gulp.dest("dist/css/"));
});
gulp.task("copy-img",function () {
    return gulp.src("src/images/**/*").pipe(gulp.dest("dist/images/"));
});
gulp.task("img",function () {
    return gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images/"));
});
gulp.task("copy-json",function(){
    return gulp.src(["src/sever/*.json"]).pipe(gulp.dest("dist/sever/"));
});
gulp.task("copy-video",function(){
    return gulp.src(["src/video/*"]).pipe(gulp.dest("dist/video/"));
});

// gulp.task("scripts",function(){
//     return gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js/"));
// });

//给静态资源添加一个hash值后缀
gulp.task("rev",function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js/"))
        .pipe(rev())
        .pipe(gulp.dest("dist/js/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/js/"));
});
gulp.task("rev2",function () {
    return gulp.src("src/css/*.css")
        .pipe(minify())
        .pipe(gulp.dest("dist/css"))
        .pipe(rev())
        .pipe(gulp.dest("dist/css"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/css"))
});

//根据rev-manifest对link路径进行替换
gulp.task("rev-collector",function(){
    return gulp.src(["dist/css/*.json","dist/html/*.html"])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(gulp.dest("dist/html/"))
});
gulp.task("rev-collector1",function(){
    return gulp.src(["dist/js/*.json","dist/html/*.html"])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(gulp.dest("dist/html"))
});

// gulp.task("rename",function(){
//     return gulp.src("src/js/**/*")
//         .pipe(concat("all.js"))
//         .pipe(gulp.dest("dist/js"))
//         .pipe(uglify())
//         .pipe(rename("all-min.js"))
//         .pipe(gulp.dest("dist/js"));
// });

gulp.task("watch",function () {
    gulp.watch("src/html/*",["html"]);
    gulp.watch("src/css/*.css",["css"]);
    gulp.watch("src/css/*.js",["scripts"]);
    gulp.watch("src/images/**/*",["copy-img"]);
    gulp.watch("src/scss/*",["copy-video"]);
    gulp.watch(["src/json/*.json"],["copy-json"]);
});