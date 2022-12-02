import { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf8').split('\n');

let result: number[] = [];

let current: number[] = [];

for (let i = 0; i < input.length; i++) {
    if(input[i] == "") {
        result.push(current.reduce((a, b) => a + b, 0));
        current = [];
        continue;
    }
    current.push(parseInt(input[i]));
}

result.sort((a, b) => b - a);
console.log(result[0], result[1] + result[2] + result[0]);