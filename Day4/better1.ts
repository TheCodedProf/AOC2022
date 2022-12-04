import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('\r\n')
let eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n')


function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function p1() {

    let valid = -1;

    input.forEach(line => line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1]))).some((el, i, [a,b]) => a.every(el => b.includes(el)) || b.every(el => a.includes(el)) ? valid++ : null))

    console.log(valid)

}

p1()

function p2() {
    
    let valid = -1;

    input.forEach(line => line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1]))).some((el, i, [a,b]) => a.some(el => b.includes(el)) ? valid++ : null));

    console.log(valid)
    
}
p2()