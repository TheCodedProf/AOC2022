import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('\r\n')
let eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n')


function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function p1() {

    let valid = 0;

    for(let line of input) {

        let [first, second] = line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1])));

        (first.every(el => {
            return second.includes(el);
        }) == true) || (second.every(el => {
            return first.includes(el);
        }) == true) ? valid++ : null;

    }

    console.log(valid)

}

p1()

function p2() {
    
    let valid = 0;

    for(let line of input) {

        let [first, second] = line.split(',').map(x => range(parseInt(x.split('-')[0]), parseInt(x.split('-')[1])));

        first.some(el => {return second.includes(el)}) ? valid++ : null;

    }

    console.log(valid)
    
}
p2()