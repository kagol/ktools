/**
 * RGB颜色转换成16进制色值
 * @param r 10进制红色
 * @param g 10进制绿色
 * @param b 10进制蓝色
 */
const rgb2hex = function(r: number, g: number, b: number) {
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

const hex = function(n: number) {
  return zeroFill(n.toString(16));
}

const zeroFill = function(hex: string) {
  return hex.length === 1 ? `0${hex}` : hex;
}

export default rgb2hex;
