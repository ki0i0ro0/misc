var hooks = require('hooks');
var stash = {};
var fs = require('fs');

// hook to retrieve session on a login
hooks.after('/api/httpmanage/login > [HM-API001] ログイン > 200 > application/json; charset=utf-8', function (transaction) {
  hooks.log(transaction.real);
  const token = transaction.real.headers['set-cookie'][0]
  hooks.log(token);
  stash['token'] = token;
  // fs.writeFile('hoge.txt', stash['token']);
});

// hook to set the session cookie in all following requests
hooks.beforeEach(function (transaction) {
  if (stash['token'] != undefined) {
    if (transaction.expected.statusCode != "401"){
      transaction.request.headers.Cookie = stash['token']
      if (["400","403","404","204"].includes(transaction.expected.statusCode)) {
        transaction.skip = true;
        // transaction.request.body = JSON.stringify({ test: '' })
      }
    };
  };
});
