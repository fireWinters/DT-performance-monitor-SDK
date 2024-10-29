<!--
 * @Author: Diana Tang
 * @Date: 2024-10-29 17:22:10
 * @LastEditors: Diana Tang
 * @Description: 必读文件
 * @FilePath: /DT-performance-monitor-SDK/Readme.md
-->

## 测试环境
```
yarn 安装依赖
yarn example:run
```
## 打包
```
yarn build    // 构建dist
yarn api:run // 合并ts
```

## 注意

某些参数的获取是不准确的，自行在项目中进行调优
microbundle 用来打包SDK rollup也可以的。但是得需要自己攒很多东西
parcel snowpack
ts声明文件xxx.d.ts  "api:init": "api-extractor init",

"api:doc": "typedoc --out docs src"用来生成文档的

