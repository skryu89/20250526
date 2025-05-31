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
//require()は、Node.jsにおいてモジュール（外部ファイルやライブラリ）を読み込むための関数。
//これを使用することで、他のファイルに定義された機能や外部のパッケージを現在のファイルで利用できるようになる。
//使用例：
const fs = require('fs'); // ファイルシステムモジュールを読み込む
const gulp = require('gulp'); // gulpを読み込む
//このように、require()を使うことで、コードの再利用性が高まり、機能ごとにプログラムの構造を整理できる。


//2.gulp.task()どう使いますが？また、どう⾔った仕様ですか？
//gulp.task()は、Gulpにおいてタスク(作業単位)を定義するための関数。タスク名と、そのタスクが実行する処理を指定する。
//基本的な構文：
gulp.task('タスク名', function () {
// タスクの処理内容
});
//使用例：
gulp.task('hello', function () {
  console.log('Hello, Gulp!');
});
//この例では、gulp helloとコマンドを実行すると、コンソールに「Hello, Gulp!」と表示される。
//また、タスク名をdefaultにすると、gulpコマンドだけでそのタスクが実行される。
gulp.task('default', function () {
// デフォルトタスクの処理内容
});


//3.タスクの対象はどのようにして指定すれば良いですか？
//Gulpでは、gulp.src()を使用してタスクの対象となるファイルを指定する。
//この関数は、処理したいファイルのパスを指定し、ストリームとして返す。
//使用例：
gulp.task('styles', function () {
  return gulp.src('src/sass/**/*.scss') // Sassファイルを対象
    .pipe(sass()) // Sassをコンパイル
    .pipe(gulp.dest('dist/css')); // 出力先
});
//この例では、src/sass/ディレクトリ以下のすべての.scssファイルを対象に、
//Sassのコンパイルを行い、dist/cssディレクトリに出力している。


//4.対象のタスクに対して複数処理をしたい時はどうすれば良いですか？
//複数の処理を連続して行いたい場合は、pipe()メソッドを使用して処理をつなげる。
//使用例：
gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js') // JavaScriptファイルを対象
    .pipe(concat('all.js')) // ファイルを結合
    .pipe(uglify()) // 圧縮
    .pipe(gulp.dest('dist/js')); // 出力先
});
//この例では、JavaScriptファイルを結合し、圧縮した後、dist/jsディレクトリに出力している。


//5.watch機能はどう⾔ったものですか？
//Gulpのwatch機能は、指定したファイルやディレクトリを監視し、
//変更があった際に自動的に指定したタスクを実行する機能。
//使用例：
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});
//この例では、src/sass/ディレクトリ以下の.scssファイルに変更があった場合、stylesタスクが自動的に実行される。
//これにより、手動でタスクを実行する手間が省け、開発効率が向上する。





 






