# KTools

前端工具库

## 工具方法

- stairStepAccessTable 阶梯访问表

## 本地开发

``` javascript
npm start
```

## 打包

``` javascript
npm run build
```

## 使用

``` javascript
import kt from './ktools.esm.js';
const { stairStepAccessTable } = kt;

const contributionNum = 7;
const contributionRangeArray = [ 0, 3, 6, 9, 10 ];
const colorArray = [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127' ];
const color = stairStepAccessTable(contributionNum, contributionRangeArray, colorArray);
console.log('color:', color);
```

## 示例

```
cd demo
anywhere
```

浏览器访问

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)
