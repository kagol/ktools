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
const stairStepAccessTable = function(source: number, sourceRangeArray: number[], targetArray: string[]): string {
  const maxTarget = targetArray.length - 1;
  let targetIndex = 0;
  let target = targetArray[maxTarget];
  while(target === targetArray[maxTarget] && targetIndex < maxTarget) {
      if (source <= sourceRangeArray[targetIndex]) { // <= 意味着包含右边界
          target = targetArray[targetIndex];
      }
      targetIndex += 1;
  }
  return target;
}

export default stairStepAccessTable;
