#!/usr/bin/env /usr/local/bin/node
"use_strict";

const fs = require('fs');
const readline = require('readline');
const PDFDocument = require('pdfkit');

let path = process.argv[2];

let lineReader = readline.createInterface({
    input: fs.createReadStream(path)
});

let arr = new Map();
let glyph1 = [];
let glyph2 = [];
let glyph3 = [];
let glyph4 = [];

lineReader.on('line', line => {

    let obj = JSON.parse(line);

    // 0 1 97 30
    // 1 1 0 48
    // 0 1 0 36
    let payload = obj.payload;

    let slice = payload.slice(0, 4);
    slice = JSON.stringify(slice);

    if (arr.has(slice)) {
        arr.set(slice, arr.get(slice) + 1);
    } else {
        arr.set(slice, 1);
    }

    let offset = 14;
    if (slice == '[0,1,97,30]' && obj.len >= offset + 4) {

        glyph1.push(payload[offset + 1]);
        glyph2.push(payload[offset + 2]);
        glyph3.push(payload[offset + 3]);
        glyph4.push(payload[offset + 4]);
        // console.log(payload);
    }
});

lineReader.on('close', async line => {

    const doc = new PDFDocument({size:[glyph1.length, 500]});
    doc.pipe(fs.createWriteStream('output.pdf'));

    doc.save()
       .moveTo(0, 300);

    for (let x = 0; x < glyph1.length; ++x) {

       doc.lineTo(x, 300 - glyph1[x]);
    }

    doc.stroke("#F00");

    doc.save()
        .moveTo(0, 300);

    for (let x = 0; x < glyph2.length; ++x) {

       doc.lineTo(x, 300 - glyph2[x]);
    }

    doc.stroke("#0F0");

    doc.save()
        .moveTo(0, 300);

    for (let x = 0; x < glyph3.length; ++x) {

       doc.lineTo(x, 300 - glyph3[x]);
    }

    doc.stroke("#00F");

    doc.save()
        .moveTo(0, 300);

    for (let x = 0; x < glyph4.length; ++x) {

       doc.lineTo(x, 300 - glyph4[x]);
    }

    doc.stroke("#000");

    doc.end();

    console.log(arr);
});

