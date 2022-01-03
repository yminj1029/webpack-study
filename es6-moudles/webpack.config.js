var path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/app.js", //대상 파일
  output: {
    //결과물
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    //중간 개입
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map", //빌드한 결과물과 빌드 전 결과물 비교 가능
};

//웹팩의 4가지 주요 속성
// entry : (변환, 빌드, 컴파일, 번들링) 웹 자원 변환하기 위해 필요한 최초 진입점
// output : 결과물의 파일 경로 > 옵션 형태
// loader : 파일간의 관계를 파악(해석)할 때 자바스크립트 파일이 아닌 웹자원을 변환함. (module)
// plugin
