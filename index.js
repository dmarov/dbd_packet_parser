"use_strict";

const fs = require('fs');
const readline = require('readline');

let path = process.argv[2];

let lineReader = readline.createInterface({
    input: fs.createReadStream(path)
});

// let arr = new Map;
// lineReader.on('line', line => {

//     let obj = JSON.parse(line);

//     if (arr.has(obj.len)) {
//         arr.set(obj.len, arr.get(obj.len) + 1);
//     } else {
//         arr.set(obj.len, 1);
//     }
// });


// lineReader.on('close', line => {

//     console.log(arr);
// });

let arr = new Map;
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
    // if (slice == '[0,1,97,30]') {
    //     console.log(payload[8]);
    // }
});


lineReader.on('close', line => {

    console.log(arr);
});
