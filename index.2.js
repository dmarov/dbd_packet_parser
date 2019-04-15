#!/usr/bin/env /usr/local/bin/node
"use_strict";

const fs = require('fs');
const readline = require('readline');
const path = require('path');

let dir = process.argv[2];
let files = fs.readdirSync(dir);

for (let file of files) {

    let lineReader = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname, dir, file)),
    });

    let map = {};

    lineReader.on('line', line => {

        let obj = JSON.parse(line);

        let payload = obj.payload;
        let items = payload.split("|");
        let slice4 = items.slice(0, 4);

        // let key = ('' + slice4[0] + slice4[1] + slice4[2] + slice4[3]).split("").reverse().join("");
        let key = ('' + slice4[0] + slice4[1] + slice4[2] + slice4[3]);
        if (map[key] !== undefined)
            map[key]++;
        else {
            map[key] = 1;
        }

    });

    lineReader.on('close', async line => {

        console.log("-----");
        console.log(file);
        for (prop in map) {
            console.log(prop + ': ' + map[prop]);
        };
    });

}
