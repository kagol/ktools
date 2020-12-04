/**
 * RGB颜色转换成16进制色值
 * @param rgb rgb颜色
 * @example
 * 输入
 * [123, 201, 111]
 * or 'rgb(123, 201, 111)'
 * 
 * 输出
 * '#7bc96f'
 */
const rgb2hex = function(rgb: string | number[]): string {
  let rgbArray: any = rgb;
  if (typeof rgb === 'string') {
    rgbArray = toArray(rgb);
  }
  const [r, g, b] = rgbArray;
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

const toArray = function(rgb) {
  const colorNumber = rgb.slice(4, rgb.length - 1);
  return colorNumber.split(',').map(item => +item);
}

export default rgb2hex;
