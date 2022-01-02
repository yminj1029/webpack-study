var path = require("path");
//(node.js 문법)
//node path 라이브러리
//path.resolve? 경로를 잡아준다.
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
