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

// 案例1
/**
 * 规则：
 * 0: '#ebedf0'
 * 1-3: '#c6e48b'
 * 4-6: '#7bc96f'
 * 7-9: '#239a3b'
 * >=10: '#196127'
 *  */
const contributionNum = 7;
const contributionRangeArray = [ 0, 3, 6, 9, 10 ];
const colorArray = [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127' ];
const color = stairStepAccessTable(contributionNum, contributionRangeArray, colorArray);
console.log('color:', color); // '#239a3b'

// 案例2（来自《代码大全》）
const studentScore = 88;
const rangeLimit = [ 50.0, 65.0, 75.0, 90.0, 100.0 ];
const grade = [ 'F', 'D', 'C', 'B', 'A' ];
const score = stairStepAccessTable(studentScore, rangeLimit, grade);
console.log('score:', score); // B
```

## 示例

```
cd demo
anywhere
```

浏览器访问

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)
