#!/usr/bin/env /usr/local/bin/node
// lengths of packets starting with 10100003
"use_strict";

const fs = require('fs');
const readline = require('readline');
const path = require('path');

let file = process.argv[2];

let lineReader = readline.createInterface({
    input: fs.createReadStream(file),
});

let map = {};

lineReader.on('line', line => {

    let obj = JSON.parse(line);

    let payload = obj.payload;

    let res = payload.match(/^00\|10\|16\|E1\|00\|00\|(.*)\|$/);
    if (res) {
        let match = res[1];
        console.log(match);
    }

});

lineReader.on('close', async line => {

});
