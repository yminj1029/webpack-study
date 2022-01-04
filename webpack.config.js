//Quiz

var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    //웹팩이 해석할때 도움을 줌
    alias: {
      //별칭. vue라고 들어간건 아래 파일로 연결
      vue$: "vue/dist/vue.esm.js",
    }, //확장자일 경우 .js, .vue 를 뒤에 붙이지 않아도 된다. 내(webpack)가 알아서 해석한다!!
    extensions: ["*", ".js", ".vue", ".json"],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    //성능 관련..
    hints: false,
  },
  devtool: "#eval-source-map",
};

//웹팩 버전 3일경우. 4일때는 mode : production으로!!
// if (process.env.NODE_ENV === "production") {
//   //배포일 경우 아래를 추가한다.
//   module.exports.devtool = "#source-map";
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: '"production"',
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false,
//       },
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//     }),
//   ]);
// }
