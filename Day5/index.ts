import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').split('\r\n');
const eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n');
const aInput = readFileSync('./actualInput.txt', 'utf8').split('\r\n');

let procedures: {}[] = []
let stack1: string[] = [];

aInput.forEach(line => {

    let content = line.replace(/\s/g, '');

    let isUnnecessary = !content || !isNaN(parseInt(content));

    if (isUnnecessary) {
        return;
    }

    let isProcedure = line.indexOf('move') > -1;

    if (isProcedure) {
        let [move, quant, from, source, to, target] = line.split(' ');
        procedures.push({
            [move]: parseInt(quant),
            [from]: parseInt(source) - 1,
            [to]: parseInt(target) - 1
        });  
    } else {
        for(let i = 0; i < line.length; i += 4) {
            let stack = (i/4);
            let crate = line.substring(i, i + 4).match(/\w/g) || '';
            if (!stack1[stack]) stack1[stack] = '';
            stack1[stack] += crate
        }
    }


});

stack1 = stack1.map(s => s.split('').reverse().join(''))

/*
    [M]             [Z]     [V]     
    [Z]     [P]     [L]     [Z] [J] 
[S] [D]     [W]     [W]     [H] [Q] 
[P] [V] [N] [D]     [P]     [C] [V] 
[H] [B] [J] [V] [B] [M]     [N] [P] 
[V] [F] [L] [Z] [C] [S] [P] [S] [G] 
[F] [J] [M] [G] [R] [R] [H] [R] [L] 
[G] [G] [G] [N] [V] [V] [T] [Q] [F] 
 1   2   3   4   5   6   7   8   9 
*/

let crates: string[] = Array.from(stack1);

(async () => {

    for(let line of procedures) {        
        
        for(let i = 0; i < line["move"]; i++) {
            crates[line["to"]] += crates[line["from"]].substring(crates[line["from"]].length - 1);
            crates[line["from"]] = crates[line["from"]].substring(0, crates[line["from"]].length - 1);
        }
    }
})();

let b: string[] = []
for(let i = 0; i < crates.length; i++) {
    b.push(crates[i].substring(crates[i].length - 1));
}

console.log("p1: ", b.join(''));

crates = Array.from(stack1);

(async () => {

    for(let line of procedures) {        
        crates[line["to"]] += crates[line["from"]].substring(crates[line["from"]].length - line["move"]);
        crates[line["from"]] = crates[line["from"]].substring(0, crates[line["from"]].length - line["move"]);
    }
})();

let a: string[] = []
for(let i = 0; i < crates.length; i++) {
    a.push(crates[i].substring(crates[i].length - 1));
}

console.log("p2: ", a.join(''));