'use strict';

import {createServer as serve} from 'http';
import {join} from 'path';
import {readFile} from 'fs';

import {urls, DATA_PATH, PORT} from './config.json';

let log = console.log.bind(console);

let cache = {};

urls.forEach((tuple) => {
    let key = Object.keys(tuple)[0];

    cache[key] = join(DATA_PATH, tuple[key]);
});

let keys = Object.keys(cache);

keys.forEach((key) => {
    readFile(cache[key], {encoding: 'utf8'}, (err, data) => {
        if (err) {return;}

        cache[key] = data;
    });
});

serve((req, res) => {
    let url = req.url;

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(cache[url] ? cache[url] : '{}');
}).listen(PORT, '127.0.0.1');

log(`Unreal is up and running at port ${PORT}.`);
