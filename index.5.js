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
    arr.pop();
    let res = [];
    for (let el of arr) {
        if (el[0] != undefined && el[1] != undefined)
            res.push(parseInt(el[1], 16) * 16 + parseInt(el[0], 16));
    }

    try {

        let packet = new Dbdpacket(new KaitaiStream(new Uint8Array(res)));

        let body = packet.bodyMainTwo;

        if (body !== undefined) {

            console.log(body.const);
            // console.log(body.notConst);
            
        }

        body = packet.bodyMainOne;

        if (body !== undefined) {

            console.log(body.const);
            // console.log(body.notConst);
            
        }
    } catch(e) {
        // console.log(obj);
    }

    // if (arr.length == 56)
    //     // console.log(payload);

    let val = arr.length;

    if (map[val] !== undefined) {
        map[val]++;
    } else {
        map[val] = 1;
    }
});

lineReader.on('close', async line => {
    console.log(map);
});
