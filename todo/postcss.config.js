const autoprefixer = require("autoprefixer");

// 自动处理css,加上前缀,处理兼容性
module.exports = {
  plugins: [
    autoprefixer()
  ]
}