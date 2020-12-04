import isColor from './is-color';
import chunk from './chunk';

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
const getRgb = function(hex: string): string[] {
  const hexNum = hex.split('#')[1];

  if (hexNum.length === 3) {
    return chunk(hexNum, 1).map(value => value.join(''));
  } else if (hexNum.length === 6) {
    return chunk(hexNum, 2).map(value => value.join(''));
  } else {
    throw new Error('The hex number is invalid.');
  }
}

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
export const hex2decimal = function(value: string) {
  return parseInt(value, 16);
}

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
const hex2rgb = function(hex: string, format: 'color' | 'array' = 'array'): number[] | string {
  if (!isColor(hex)) {
    return '';
  }

  const [red, green, blue] = getRgb(hex);

  let rgb: number[] | string = [hex2decimal(red), hex2decimal(green), hex2decimal(blue)];
  if (format === 'color') {
    rgb = `rgb(${hex2decimal(red)}, ${hex2decimal(green)}, ${hex2decimal(blue)})`;
  }

  return rgb;
}

export default hex2rgb;
