# KTools

前端工具库

## API

- chunk                数组分块
- hex2rgb              十六进制颜色转十进制颜色
- isColor              判断是否是十六进制颜色值
- isPlainObject        判断是否是对象类型
- rgb2hex              十进制颜色转十六进制颜色
- stairStepAccessTable 阶梯访问表

## 本地开发

``` sh
npm start
```

## 打包

``` javascript
npm run build
```

## 安装

``` javascript
npm i @kagol/ktools
```

## 使用

``` javascript
import { 
  chunk,
  hex2rgb,
  isColor,
  isPlainObject,
  rgb2hex,
  stairStepAccessTable,
} from '@kagol/ktools';

console.log('chunked array:', chunk('7bc96f', 2)); // [['7', 'b'], ['c', '9'], ['6', 'f']]
console.log('rgb:', hex2rgb('#7bc96f')); // rgb(123, 201, 111)
console.log('isColor(#7bc96f):', isColor('#7bc96f')); // true
console.log('isColor(#7bc9):', isColor('#7bc9')); // false
console.log('isPlainObject:', isPlainObject({ '6': '#7bc96f' }));
const rgb = [12, 48, 120];
console.log('hex:', rgb2hex(...rgb));

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

```sh
cd demo
anywhere
```

浏览器访问

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)
