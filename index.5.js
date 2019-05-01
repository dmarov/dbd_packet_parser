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
    let arr = payload.split('|');
    let res = '';
    for (let el of arr) {
        if (el[0] != undefined && el[1] != undefined)
            res += el[1] + el[0];
    }

        console.log(res);

});

lineReader.on('close', async line => {

});
