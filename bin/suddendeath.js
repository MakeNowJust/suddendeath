#!/usr/bin/env node

var
suddendeath = require('..');

var
text = [], single = false,
flag = true;

process.argv.slice(2).forEach(function (arg) {
  if (flag) {
    if (/^--/.test(arg)) {
      switch (arg) {
      case '--help':
        showHelp();
        process.exit(0);
        break;
      case '--version':
        showVersion();
        process.exit(0);
        break;
      case '--single':
        single = true;
        break;
      case '--':
        flag = false;
        break;
      default:
        console.error('Unrecognized option: ' + arg);
        process.exit(1);
        break;
      }
    } else if (/^-/.test(arg)) {
      arg.slice(1).split('').forEach(function (a) {
        switch (a) {
        case 'h':
          showHelp();
          process.exit(0);
          break;
        case 'v':
          showVersion();
          process.exit(0);
          break;
        case 's':
          single = true;
          break;
        default:
          console.error('Unrecognized option: ' + arg);
          process.exit(1);
        }
      });
    } else {
      text.push(arg);
      flag = false;
    }
  } else {
    text.push(arg);
  }
});

if (text.length >= 1) {
  text = text.join('\n');
} else {
  text = undefined;
}

console.log(single ? suddendeath.single(text) : suddendeath(text));


function showHelp() {
  console.log('suddendeath');
  console.log('  Generate an ascii art of sudden death (突然の死).');
  console.log('');
  console.log('Usage');
  console.log('  $ suddendath {-svh|--single|--help|--version} [--] <text>...');
  console.log('');
  console.log('Options');
  console.log('  -s, --single  single line mode');
  console.log('  -h, --help    show this help and exit');
  console.log('  -v, --version show version and exit');
  console.log('  --            after it, use as text');
  console.log('');
  console.log('Examples');
  console.log('  $ suddendeath');
  console.log(suddendeath().split('\n').map(function (l) { return '  ' + l; }).join('\n'));
  console.log('  $ suddendeath 突然の 死');
  console.log(suddendeath('突然の\n死').split('\n').map(function (l) { return '  ' + l; }).join('\n'));
}

function showVersion() {
  console.log(require('../package.json').version);
}
