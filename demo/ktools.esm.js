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

/**
 * RGB颜色转换成16进制色值
 * @param r 10进制红色
 * @param g 10进制绿色
 * @param b 10进制蓝色
 */
var rgb2hex = function (r, g, b) {
    return "#" + hex(r) + hex(g) + hex(b);
};
var hex = function (n) {
    return zeroFill(n.toString(16));
};
var zeroFill = function (hex) {
    return hex.length === 1 ? "0" + hex : hex;
};

var ktools = {
    stairStepAccessTable: stairStepAccessTable,
    rgb2hex: rgb2hex,
};

export default ktools;
