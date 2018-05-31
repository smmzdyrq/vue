# 配置文件
npm i postcss-loader autoprefixer bable-loader babel-core

# postcss-loader
```javascript
const autoprefixer = require("autoprefixer");

// 自动处理css
module.exports = {
  plugins: [
    autoprefixer()
  ]
}
```

# bable-loader
添加配置