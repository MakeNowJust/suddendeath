var
expect = require('chai').expect;

var
suddendeath = require('../');

describe('suddendeath', function () {

  it('should return an ascii art of sudden death.', function () {
    expect(suddendeath('突然の死')).to.equal([
      '＿人人人人人＿',
      '＞ 突然の死 ＜',
      '￣^Y^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  it('should return an ascii art of sudden death. (default)', function () {
    expect(suddendeath()).to.equal([
      '＿人人人人人＿',
      '＞ 突然の死 ＜',
      '￣^Y^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  it('should return an ascii art of sudden death. (proportional)', function () {
    expect(suddendeath('突然の死', true)).to.equal([
      '＿人人人人＿',
      '＞ 突然の死 ＜',
      '￣^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  it('should return an ascii art of sudden death. (multi line)', function () {
    expect(suddendeath('突然の\n死')).to.equal([
      '＿人人人人＿',
      '＞ 突然の ＜',
      '＞   死   ＜',
      '￣^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  it('should return an ascii art of sudden death. (alphabet mixed)', function () {
    expect(suddendeath('突然の\n死\nSudden Death!')).to.equal([
      '＿人人人人人人人人＿',
      '＞     突然の     ＜',
      '＞       死       ＜',
      '＞ Sudden Death!  ＜',
      '￣^Y^Y^Y^Y^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  it('should return an ascii art of sudden death. (tamil)', function () {
    expect(suddendeath('திடீர் மரணம்')).to.equal([
      '＿人人人人人人人＿',
      '＞ திடீர் மரணம் ＜',
      '￣^Y^Y^Y^Y^Y^Y^Y￣',
    ].join('\n'));
  });

  describe('.single', function () {

    it('should return an ascii art of sudden death.', function () {
      expect(suddendeath.single('突然の死')).to.equal([
        '＞ 突然の死 ＜',
      ].join('\n'));
    });

    it('should return an ascii art of sudden death. (default)', function () {
      expect(suddendeath.single()).to.equal([
        '＞ 突然の死 ＜',
      ].join('\n'));
    });

    it('should return an ascii art of sudden death. (multi line)', function () {
      expect(suddendeath.single('突然の\n死')).to.equal([
        '＞ 突然の ＜',
        '＞   死   ＜',
      ].join('\n'));
    });

  });

});
