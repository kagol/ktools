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
const rgb2hex = function(r: number, g: number, b: number): string {
  return `#${decimal2hex(r)}${decimal2hex(g)}${decimal2hex(b)}`;
}

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
const decimal2hex = function(n: number): string {
  return zeroFill(n.toString(16));
}

const zeroFill = function(hex: string): string {
  return hex.length === 1 ? `0${hex}` : hex;
}

export default rgb2hex;
