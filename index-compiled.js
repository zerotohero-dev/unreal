'use strict';

var _http = require('http');

var _path = require('path');

var _fs = require('fs');

var _configJson = require('./config.json');

var log = console.log.bind(console);

var cache = {};

_configJson.urls.forEach(function (tuple) {
    var key = Object.keys(tuple)[0];

    cache[key] = (0, _path.join)(_configJson.DATA_PATH, tuple[key]);
});

var keys = Object.keys(cache);

keys.forEach(function (key) {
    console.log(key);

    (0, _fs.readFile)(cache[key], { encoding: 'utf8' }, function (err, data) {
        if (err) {
            return;
        }

        cache[key] = data;
    });
});

(0, _http.createServer)(function (req, res) {
    var url = req.url;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(cache[url] ? cache[url] : '{}');
}).listen(_configJson.PORT, '127.0.0.1');

log('Unreal is up and running at port ' + _configJson.PORT + '.');

//# sourceMappingURL=index-compiled.js.map