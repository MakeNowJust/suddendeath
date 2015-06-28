'use strict';

var
vw = require('visualwidth'),
strutil = require('./strutil');

function generate(lines, lens, maxLen) {
  return lines
    .map(function (l, i) {
      return '＞ ' + strutil.center(l, lens[i], maxLen) + ' ＜';
    })
    .join('\n');
};

/*
 * # suddendeath
 *
 * Generate an ascii art of sudden death (突然の死)
 * from specified `text`.
 *
 * ## arguments
 *
 * - `text` is the text to die suddenly.
 *   its default is `'突然の死'`.
 * - If `proportional` is `true`, it returns
 *   the text for proportional font.
 *
 * ## results
 *
 * A text of ascii art of sudden death.
 *
 * ## examples
 *
 * ```
 * var
 * suddendeath = require('suddendeath');
 *
 * console.log(suddendeath());
 * // => ＿人人人人人＿
 * // => ＞ 突然の死 ＜
 * // => ￣^Y^Y^Y^Y^Y￣
 *
 * console.log(suddendeath('突然の\n死'));
 * // => ＿人人人人＿
 * // => ＞ 突然の ＜
 * // => ＞   死   ＜
 * // => ￣^Y^Y^Y^Y￣
 *
 * console.log(suddendeath('突然の死', true));
 * // => ＿人人人人＿
 * // => ＞ 突然の死 ＜
 * // => ￣^Y^Y^Y^￣
 * ```
 */ 
module.exports = function suddendeath(text, proportional) {
  if (typeof text === 'undefined') text = '突然の死';

  var
  lines = text.split('\n'),
  lens = lines.map(vw),
  maxLen = lens.slice().sort(function (a, b) { return b - a; })[0];
  maxLen += maxLen % 2;

  return '＿' + strutil.cycle('人', Math.ceil((maxLen + (proportional ? 0 : 2)) / 2)) + '＿\n' +
         generate(lines, lens, maxLen) + '\n' +
         '￣' + strutil.cycle('^Y', maxLen + (proportional ? -1 : 2)) + '￣';
};

/*
 * # `suddendeath.single`
 *
 * It's single line version of `suddendeath'
 *
 * ## arguments
 *
 * - `text` is the text to die suddenly.
 *   its default is `'突然の死'`.
 *
 * ## results
 *
 * A text of ascii art of sudden death.
 *
 * ## examples
 *
 * ```
 * var
 * suddendeath = require('suddendeath');
 *
 * console.log(suddendeath.signle());
 * // => ＞ 突然の死 ＜
 *
 * console.log(suddendeath('突然の\n死'));
 * // => ＞ 突然の ＜
 * // => ＞   死   ＜
 * // What's single line version!
 * ```
 */ 
module.exports.single = function single(text) {
  if (typeof text === 'undefined') text = '突然の死';

  var
  lines = text.split('\n'),
  lens = lines.map(vw),
  maxLen = lens.sort(function (a, b) { return b - a; })[0];
  maxLen += maxLen % 2;

  return generate(lines, lens, maxLen);
};
