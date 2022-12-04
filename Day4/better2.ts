import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('\r\n')

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

console.log(((valid: number = -1) => {input.forEach(line => line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1]))).some((_, _i, [a,b]) => valid += (a.every(el => b.includes(el)) || b.every(el => a.includes(el))) as unknown as number)); return valid})(-1));

console.log(((valid: number = -1) => {input.forEach(line => line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1]))).some((_, _i, [a,b]) => valid += (a.some(el => b.includes(el))) as unknown as number)); return valid})(-1));
