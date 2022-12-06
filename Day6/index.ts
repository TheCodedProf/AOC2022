import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('')
let eginput = readFileSync('./eginput.txt', 'utf8').split('');

(() => {
    for(let i = 0; i < input.length-4; i++) {
        if (new Set(Array.from(input).splice(i, 4)).size == 4) return console.log(i+4);
    }

})();

(() => {
    for(let i = 0; i < input.length-14; i++) {
        if (new Set(Array.from(input).splice(i, 14)).size == 14) return console.log(i+14);
    }

})();