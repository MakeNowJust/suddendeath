# suddendeath

Ascii art of sudden death (突然の死) generator

It is inspired by Perl's module [Acme::SuddenlyDeath](https://github.com/papix/Acme-SuddenlyDeath).

[![Build Status](https://travis-ci.org/MakeNowJust/suddendeath.svg)](https://travis-ci.org/MakeNowJust/suddendeath)
[![npm version](https://badge.fury.io/js/suddendeath.svg)](http://badge.fury.io/js/suddendeath)


## Install

```console
$ npm install -g suddendeath
```


## CLI

```console
$ suddendeath
＿人人人人人＿
＞ 突然の死 ＜
￣^Y^Y^Y^Y^Y￣

$ suddendeath 仕事しろ！
＿人人人人人人＿
＞ 仕事しろ！ ＜
￣^Y^Y^Y^Y^Y^Y￣

# single line mode
$ suddendeath -s
＞ 突然の死 ＜

# for proportional font
$ suddendeath -p
＿人人人人＿
＞ 突然の死 ＜
￣^Y^Y^Y^￣

# multi lines
$ suddendeath 突然の 死
＿人人人人＿
＞ 突然の ＜
＞   死   ＜
￣^Y^Y^Y^Y￣
```


## API

```javascript
var
suddendeath = require('suddendeath');

console.log(suddendeath());
// => ＿人人人人人＿
// => ＞ 突然の死 ＜
// => ￣^Y^Y^Y^Y^Y￣

console.log(suddendeath('突然の死', true)); // proportional
// => ＿人人人人＿
// => ＞ 突然の死 ＜
// => ￣^Y^Y^Y^￣

console.log(suddendeath('突然の\n死'));
// => ＿人人人人＿
// => ＞ 突然の ＜
// => ＞   死   ＜
// => ￣^Y^Y^Y^Y￣

console.log(suddendeath.signle());
// => ＞ 突然の死 ＜
```


## License

It is licensed by MIT. See [LICENSE](LICENSE).
