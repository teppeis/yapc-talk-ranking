var cheerio = require('cheerio');
var fetch = require('node-fetch');
var _ = require('lodash');

var YAPC_URL = 'http://yapcasia.org';
var TWITTER_API = 'http://urls.api.twitter.com/1/urls/count.json?url=';
var HATENA_API = 'http://api.b.st-hatena.com/entry.count?url=';

function wait(ms) {
  return function() {
    return new Promise(function(res) {
      setTimeout(function() {
        res();
      }, ms);
    });
  };
}

fetch('http://yapcasia.org/2015/talk/list').then(function(res) {
  return res.text();
}).then(function(html) {
  var $ = cheerio.load(html);
  var talks = $('.talk').map(function() {
    var talk = $(this);
    var title = talk.find('.title a');
    return {
      path: title.attr('href'),
      title: title.text().trim(),
      speaker_name: talk.find('.name a:first-child').text().trim(),
      speaker_url: talk.find('.name a:nth-child(2)').attr('href'),
      speaker_icon: talk.find('.speaker img').attr('src')
    };
  }).get();

  // talks = talks.slice(0, 5);
  // console.log(talks);
  var length = talks.length;
  console.error(length);

  Promise.all([twitter(talks), hatena(talks)]).then(function() {
    output(talks);
  }).catch(function(e) {
    console.error(e);
  });
});

function twitter(talks) {
  var length = talks.length;
  var result = [];
  var p = Promise.resolve();
  talks.forEach(function(talk, i) {
    p = p.then(function() {
      var url = YAPC_URL + talk.path;
      console.error(url);
      return fetch(TWITTER_API + encodeURIComponent(url));
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      talk.twitter = json.count;
      console.error(`${i}/${length}`);
    }).then(wait(100));
  });

  return p;
}

function hatena(talks) {
  var length = talks.length;
  var result = [];
  var p = Promise.resolve();
  talks.forEach(function(talk, i) {
    p = p.then(function() {
      var url = YAPC_URL + talk.path;
      console.error(url);
      return fetch(HATENA_API + encodeURIComponent(url));
    }).then(function(res) {
      return res.text();
    }).then(function(count) {
      talk.hatena = Number(count || 0);
      console.error(`${i}/${length}`);
    }).then(wait(100)).catch(function(e) {
      console.error(e);
    });
  });

  return p;
}

function output(talks) {
  var twitterTotal = _(talks).map('twitter').sum();
  var hatenaTotal = _(talks).map('hatena').sum();
  talks.forEach(function(talk) {
    talk.total = Math.floor(talk.twitter * 10000 / twitterTotal + talk.hatena * 10000 / hatenaTotal);
  });
  var ranking = _(talks).sortBy('total').reverse().value();
  var data = {
    date: Date.now(),
    ranking: ranking
  };
  console.log(JSON.stringify(data, null, 2));
}
