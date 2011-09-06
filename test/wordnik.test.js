var assert = require('assert')
  , key = require('./key')
  , Wordnik = require('../');

var options = { api_key: key };

module.exports = {
  
  'Wordnik#constructor no key': function() {
    try {
      var wn = new Wordnik();
    } catch(e) {
      assert.isNotNull(e);
    }
  },
  
  'Wordnik#authenticate': function() {
    var wn = new Wordnik(options);
    
    wn.authenticate('username', 'password', function(e, user) {
      assert.isNull(e);
      assert.isNotNull(user);
    });
  },
  
  'Wordnik#user': function() {
    var wn = new Wordnik(options);
    
    wn.user('userToken', function(e, user) {
      assert.isNull(e);
      assert.isNotNull(user);
    });
  },
  
  'Wordnik#wordLists': function() {
    var wn = new Wordnik(options);
    
    wn.wordLists('userToken', function(e, lists) {
      assert.isNull(e);
      assert.isNotNull(lists);
    });
  },
  
  'Wordnik#apiTokenStatus': function() {
    var wn = new Wordnik(options);
    
    wn.apiTokenStatus(function(e, status) {
      assert.isNull(e);
      assert.isNotNull(status);
    });
  },
  
  'Wordnik#word': function() {
    var wn = new Wordnik(options);
    
    wn.word('test', function(e, word) {
      assert.isNull(e);
      assert.isNotNull(word);
    });
  },
  
  'Wordnik#search': function() {
    var wn = new Wordnik(options);
    
    wn.search('test', function(e, results) {
      assert.isNull(e);
      assert.isNotNull(results);
    });
  },
  
  'Wordnik#randomWord': function() {
    var wn = new Wordnik(options);
    
    wn.randomWord(function(e, word) {
      assert.isNull(e);
      assert.isNotNull(word);
    });
  },
  
  'Wordnik#randomWords': function() {
    var wn = new Wordnik(options);
    
    wn.randomWords(function(e, words) {
      assert.isNull(e);
      assert.isNotNull(words);
    });
  },
  
  'Wordnik#wordOfTheDay': function() {
    var wn = new Wordnik(options);
    
    wn.wordOfTheDay(function(e, word) {
      assert.isNull(e);
      assert.isNotNull(word);
    });
  },
  
  'Wordnik#examples': function() {
    var wn = new Wordnik(options);
    
    wn.examples('test', function(e, examples) {
      assert.isNull(e);
      assert.isNotNull(examples);
    });
  },
  
  'Wordnik#definitions': function() {
    var wn = new Wordnik(options);
    
    wn.definitions('test', function(e, defs) {
      assert.isNull(e);
      assert.isNotNull(defs);
    });
  },
  
  'Wordnik#frequency': function() {
    var wn = new Wordnik(options);
    
    wn.frequency('test', function(e, freq) {
      assert.isNull(e);
      assert.isNotNull(freq);
    });
  },
  
  'Wordnik#topExample': function() {
    var wn = new Wordnik(options);
    
    wn.topExample('test', function(e, example) {
      assert.isNull(e);
      assert.isNotNull(example);
    });
  },
  
  'Wordnik#related': function() {
    var wn = new Wordnik(options);
    
    wn.related('test', function(e, related) {
      assert.isNull(e);
      assert.isNotNull(related);
    });
  },
  
  'Wordnik#phrases': function() {
    var wn = new Wordnik(options);
    
    wn.phrases('test', function(e, related) {
      assert.isNull(e);
      assert.isNotNull(related);
    });
  },
  
  'Wordnik#hyphenation': function() {
    var wn = new Wordnik(options);
    
    wn.hyphenation('test', function(e, hyph) {
      assert.isNull(e);
      assert.isNotNull(hyph);
    });
  },
  
  'Wordnik#pronunciations': function() {
    var wn = new Wordnik(options);
    
    wn.pronunciations('test', function(e, pron) {
      assert.isNull(e);
      assert.isNotNull(pron);
    });
  },
  
  'Wordnik#audio': function() {
    var wn = new Wordnik(options);
    
    wn.audio('word', function(e, audio) {
      assert.isNull(e);
      assert.isNotNull(audio);
    });
  }

};
