import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').split('\r\n');
const eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n');

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


let egIn: string[] = [
    "ZN",
    "MCD",
    "P"
];

let In: string[] = [
    "GFVHPS",
    "GJFBVDZM",
    "GMLJN",
    "NGZVDWP",
    "VRCB",
    "VRSMPWLZ",
    "THP",
    "QRSNCHZV",
    "FLGPVQJ"
];


let crates: string[] = Array.from(In);


(async () => {

    for(let line of input) {
        let count: string | number;
        let from: string | number;
        let to: string | number;

        [count, from, to] = line.replace('move ', '').replace('from ', '').replace('to ', '').split(' ');
        count = parseInt(count);
        from = parseInt(from) - 1;
        to = parseInt(to) - 1;
        
        
        for(let i = 0; i < count; i++) {
            let CR = crates[from].substring(crates[from].length - 1);
            crates[to] += CR;
            crates[from] = crates[from].substring(0, crates[from].length - 1);
        }
    }
})();
let b: string[] = []
for(let i = 0; i < crates.length; i++) {
    b.push(crates[i].substring(crates[i].length - 1));
}
console.log("p1: ", b.join(''));

crates = Array.from(In);

(async () => {

    for(let line of input) {
        let count: string | number;
        let from: string | number;
        let to: string | number;

        [count, from, to] = line.replace('move ', '').replace('from ', '').replace('to ', '').split(' ');
        count = parseInt(count);
        from = parseInt(from) - 1;
        to = parseInt(to) - 1;
        
        crates[to] += crates[from].substring(crates[from].length - count);
        crates[from] = crates[from].substring(0, crates[from].length - count);

        
    }
    console.log(In)
    console.log(crates)
})();

let a: string[] = []
for(let i = 0; i < crates.length; i++) {
    a.push(crates[i].substring(crates[i].length - 1));
}

console.log("p2: ", a.join(''));