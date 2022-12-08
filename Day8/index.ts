import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('\r\n')
let eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n');


let formattedInput: number[][] = []
let egformattedInput: number[][] = []

input.forEach((line, index) => {
    if(!formattedInput[index]) formattedInput[index] = []
    line.split('').forEach(num => {
        formattedInput[index].push(parseInt(num));
    });
});

eginput.forEach((line, index) => {
    if(!egformattedInput[index]) egformattedInput[index] = []
    line.split('').forEach(num => {
        egformattedInput[index].push(parseInt(num));
    });
});

const isVisible = (x: number, y:number, square: number[][]): boolean => {
    square = square.map(row => row.map(value => value));
    if((y  === 0) || (x === 0) || (y === square.length-1) || (x === square[0].length-1)) return true;
    
    let num = square[y][x];
    let line = square[y];
    let column = square.map(row => row[x]);
    
    let left = line.splice(0, x).every(value => value < num);
    line.shift();
    let right = line.every(value => value < num);
    let top = column.splice(0, y).every(value => value < num);
    column.shift();
    let bottom = column.every(value => value < num);
    return left || right || top || bottom;
}

//p1
let p1: any;
let out: boolean[][] = [];

(() => {
    let count = 0;
    formattedInput.forEach((row, y) => {
        row.forEach((value, x) => {
            let check = isVisible(x, y, formattedInput)
            if(check) count++;
            if(!out[y]) out[y] = [];
            out[y][x] = check;
        });
    });
    p1 = count;
})();

console.log('p1: ', p1);
// out.forEach(row => console.log(row));


const scenicView = (x: number, y:number, square: number[][]): number => {
    square = square.map(row => row.map(value => value));
    if((y  === 0) || (x === 0) || (y === square.length-1) || (x === square[0].length-1)) return 0;
    let num = square[y][x];
    let line = square[y];
    let column = square.map(row => row[x]);

    let left = line.splice(0, x).reverse();
    line.shift();
    let right = line;
    let top = column.splice(0, y).reverse();
    column.shift();
    let bottom = column;


    let counts = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }

    for(let value of left) {
        counts.left++;
        if(value >= num) {
            break;
        }
    }
    for(let value of right) {
        counts.right++
        if(value >= num) {
            break;
        }
    }
    for(let value of top) {
        counts.top++
        if(value >= num) {
            break;
        }
    }
    for(let value of bottom) {
        counts.bottom++
        if(value >= num) {
            break;
        }
    }
    
    return (counts.bottom || 1) * (counts.left || 1) * (counts.right || 1) * (counts.top || 1);
};


//p2
let p2: any;

let out2: number[][] = [];
(() => {
    formattedInput.forEach((row, y) => {
        row.forEach((value, x) => {
            let check = scenicView(x, y, formattedInput)
            if(!out2[y]) out2[y] = [];
            out2[y][x] = check;
        });
    });
})();

let currentLargest = [0,0];

out2.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value > out2[currentLargest[1]][currentLargest[0]]) {
            currentLargest = [x, y];
        }
    });
});

console.log(currentLargest)
p2 = out2[currentLargest[1]][currentLargest[0]];
console.log('p2: ', p2);

// console.log(out2)