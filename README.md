# suddendeath

Ascii art of sudden death (突然の死) generator

It is inspired by Perl's module [Acme::SuddenlyDeath](https://github.com/papix/Acme-SuddenlyDeath).


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

$ suddendeath 突然の 死
＿人人人人＿
＞ 突然の ＜
＞   死   ＜
￣^Y^Y^Y^Y￣

$ suddendeath -s
＞ 突然の死 ＜
```


## API

```javascript
var
suddendeath = require('suddendeath');

console.log(suddendeath());
// => ＿人人人人人＿
// => ＞ 突然の死 ＜
// => ￣^Y^Y^Y^Y^Y￣

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
