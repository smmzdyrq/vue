# 1. 配置loader
```javascript
rules [
  {
    test: /\.vue$/,
    loader:"vue-loader"
  },
  {
    test: /\.css$/,
    // use里可添加多个loader
    use: [
      "style-loader",
      "css-loader"
    ]
  },
  {
    test: /\styl.css$/,
    use:[
      "style-loader",
      "css-loader",
      "stylus-loader"
    ]
  },
  {
    test:/\.(gif|jpg|jpeg|pgn|svg)$/,
    use: [
      {
        loader:"url-loader",
        // use可添加选项
        oprtions: {
          limit: 1024,
          // 对应格式名字
          name:"[name].[ext]"
        }
      }
    ]
  }
]
```

# 2. 新建assets文件夹
1. 创建images和styles文件夹
2. 在index.js中导入image & css

# 3. stylus css预处理器