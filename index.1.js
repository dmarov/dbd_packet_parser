#!/usr/bin/env /usr/local/bin/node
"use_strict";

const fs = require('fs');
const readline = require('readline');
const PDFDocument = require('pdfkit');

let path = process.argv[2];

let lineReader = readline.createInterface({
    input: fs.createReadStream(path)
});

let map = {};

lineReader.on('line', line => {

    let obj = JSON.parse(line);

    let payload = obj.payload;
    let items = payload.split("|");
    let slice4 = items.slice(0, 4);

    let key = JSON.stringify(slice4);
    if (map[key] !== undefined)
        map[key]++;
    else {
        map[key] = 1;
    }

});

lineReader.on('close', async line => {

    console.log(map);
});

