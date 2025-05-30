// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// style.scssの監視タスクを作成する
gulp.task('styles', function () {
  // style.scssの更新があった場合の処理
  // style.scssファイルを取得
  return gulp.src('src/sass/**/*.scss')
  // Sassのコンパイルエラーを表⽰
  // (これがないと⾃動的に⽌まってしまう)
    .pipe(sass().on('error', sass.logError))
  // cssフォルダー以下に保存
    .pipe(gulp.dest('dist/css'));
});

 // ★ style.scssファイルを監視
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));

//課題
//1.require()どう⾔った時に使いますか？
//2.gulp.task()どう使いますが？また、どう⾔った仕様ですか？
//3.タスクの対象はどのようにして指定すれば良いですか？
//4.対象のタスクに対して複数処理をしたい時はどうすれば良いですか？
//5.watch機能はどう⾔ったものですか？




 






