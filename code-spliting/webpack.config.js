var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none", //production, development, none
  entry: "./index.js", //index.js > base.css > css-loader
  output: {
    filename: "bundle.js",
    // filename: "[chunkhash].js",알아서 hash값 줌
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //하나의 로더 규칙 -> css 확장자 가진 모든 파일은 use에 있는 loader를 적용하겠다!!
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
        // use: ["style-loader", "css-loader"], //css 로더 :  css 파일을 인지함. / style-loader 들어간 css파일을 스타일로 넣어줌.
        // 로더는 오른쪽에서 왼쪽 순서로 적용된다. ["style-loader", "css-loader", "sass-loader"]
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

//loader? 자바스크립트가 아니어도 자바스크립트로 변환. ex. style이 js파일 내부로 들어옴
//plugin : 추가적인 기능을 제공한느 속성. 해당 결과물의 형태를 바꾸는 역할을 한다.
