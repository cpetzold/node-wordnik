var path = require('path');

var Word = module.exports = function(api, o) {
  var self = this;
  this.api = api;
  
  this.obj = {};
  Object.keys(o).forEach(function(p) {
    self[p] = self.obj[p] = o[p];
  });
};

['examples', 'definitions', 'frequency', 'topExample', 'related', 'phrases', 'hyphenation', 'pronunciations', 'audio'].forEach(function(method) {
  Word.prototype[method] = function(params, fn) {
    if (typeof params == 'function') {
      fn = params;
      params = {};
    }
    this.request(method, params, fn);
  }
});

Word.prototype.request = function(route, params, fn) {
  route = path.join(this.word, route);
  this.api.request('word', route, params, fn);
};

