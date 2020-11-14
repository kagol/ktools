import chunk from 'lodash-es/chunk';
import isPlainObject from 'lodash-es/isPlainObject';

/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
var isColor = function (value) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

/**
 * 将十六进制颜色值分割成R/G/B每个色值的数组
 * @param hex 十六进制颜色值
 * @example
 * 输入
 * '#7bc96f'
 *
 * 输出
 * ['7b', 'c9', '6f']
 */
var getRgb = function (hex) {
    var hexNum = hex.split('#')[1];
    if (hexNum.length === 3) {
        return chunk(hexNum, 1).map(function (value) { return value.join(''); });
    }
    else if (hexNum.length === 6) {
        return chunk(hexNum, 2).map(function (value) { return value.join(''); });
    }
    else {
        throw new Error('The hex number is invalid.');
    }
};
/**
 * 十六进制转十进制
 * @param value 十六进制字符串
 * @example
 * 输入
 * '7b'
 *
 * 输出
 * 123
 *
 */
var hex2decimal = function (value) {
    return parseInt(value, 16);
};
/**
 * 十六进制转十进制颜色
 * @param hex 十六进制颜色值
 * #example
 * 输入
 * '#7bc96f'
 *
 * 输出
 * rgb(123, 201, 111)
 */
var hex2rgb = function (hex) {
    if (!isColor(hex)) {
        return '';
    }
    var _a = getRgb(hex), red = _a[0], green = _a[1], blue = _a[2];
    return "rgb(" + hex2decimal(red) + ", " + hex2decimal(green) + ", " + hex2decimal(blue) + ")";
};

/**
 * RGB颜色转换成16进制色值
 * @param r 10进制红色
 * @param g 10进制绿色
 * @param b 10进制蓝色
 * @example
 * 输入
 * [123, 201, 111]
 *
 * 输出
 * '#7bc96f'
 */
var rgb2hex = function (r, g, b) {
    return "#" + decimal2hex(r) + decimal2hex(g) + decimal2hex(b);
};
/**
 * 十进制转十六进制，只有一位的自动补零
 * @param n
 * @example
 * 输入
 * 123
 *
 * 输出
 * '7b'
 */
var decimal2hex = function (n) {
    return zeroFill(n.toString(16));
};
var zeroFill = function (hex) {
    return hex.length === 1 ? "0" + hex : hex;
};

/**
 * @description
 * 阶梯访问表（Stair-Step Access Table），表驱动法的一种。
 * 表驱动法是一种编程模式——从表里面查找信息而不使用逻辑语句，可用于替代if逻辑判断，降低代码的圈复杂度。
 * 阶梯访问表的使用场景：key是一个范围，而不是具体的数值的查找表（Lookup Table）
 * @param source 需要查询的源数据（要查什么？）
 * @param sourceRangeArray 源数据的区间范围数组（要查的数据在哪个区间？）
 * @param targetArray 查询的目标数组（从哪儿查？）
 * @example
 * 规则：
 * 0: '#ebedf0'
 * 1-3: '#c6e48b'
 * 4-6: '#7bc96f'
 * 7-9: '#239a3b'
 * >=10: '#196127'
 * Input:
 *   7
 *   [ 0, 3, 6, 9, 10 ]
 *   [ '#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127' ]
 * Output:
 *   '#239a3b'
 */
var stairStepAccessTable = function (source, sourceRangeArray, targetArray) {
    var maxTarget = targetArray.length - 1;
    var targetIndex = 0;
    var target = targetArray[maxTarget];
    while (target === targetArray[maxTarget] && targetIndex < maxTarget) {
        if (source <= sourceRangeArray[targetIndex]) { // <= 意味着包含右边界
            target = targetArray[targetIndex];
        }
        targetIndex += 1;
    }
    return target;
};

var ktools = {
    chunk: chunk,
    hex2rgb: hex2rgb,
    isColor: isColor,
    isPlainObject: isPlainObject,
    rgb2hex: rgb2hex,
    stairStepAccessTable: stairStepAccessTable,
};

export default ktools;
