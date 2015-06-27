var
cycle = exports.cycle = function cycle(str, n) {
  var
  res = '';

  while (res.length < n) {
    if ((n - res.length) < str.length) {
      res += str.slice(0, n - res.length);
    } else {
      res += str;
    }
  }

  return res;
};

exports.center = function center(str, w, n) {
  var
  l = Math.floor((n - w) / 2),
  r = Math.ceil((n - w) / 2);

  return cycle(' ', l) + str + cycle(' ', r);
};
