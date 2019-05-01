#!/usr/bin/env /usr/local/bin/node
// lengths of packets starting with 10100003
"use_strict";

const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Dbdpacket = require('./Dbdpacket');
const KaitaiStream = require('kaitai-struct/KaitaiStream');

let file = process.argv[2];

let lineReader = readline.createInterface({
    input: fs.createReadStream(file),
});

let map = {};

lineReader.on('line', line => {

    let obj = JSON.parse(line);

    let payload = obj.payload;
    let arr = payload.split('|');
    let res = [];
    for (let el of arr) {
        if (el[0] != undefined && el[1] != undefined)
            res.push(parseInt(el[1], 16) * 16 + parseInt(el[0], 16));
    }

    let packet = new Dbdpacket(new KaitaiStream(new Uint8Array(res)));
    let str = '' + packet.header.first + ' ' + packet.header.second + ' ' + packet.header.third + ' ' + packet.header.fourth;

    let body = packet.bodyMain;

    if (body !== undefined) {
        console.log(body.timingFirst)
    }

});

lineReader.on('close', async line => {

});
