import { readFileSync } from "fs";

let input = readFileSync('./input.txt', 'utf8').split('\r\n')
let eginput = readFileSync('./eginput.txt', 'utf8').split('\r\n')


function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function p1() {

    let valid = 0;

    for(let line of input) {
        let [first, second] = line.split(',');

        let firstArr = range(parseInt(first.split('-')[0]), parseInt(first.split('-')[1]));
        let secondArr = range(parseInt(second.split('-')[0]), parseInt(second.split('-')[1]));
            
        (firstArr.every(el => {
            return secondArr.includes(el);
        }) == true) || (secondArr.every(el => {
            return firstArr.includes(el);
        }) == true) ? valid++ : null;


    }


    console.log(valid);

}
p1()


function p2() {

    let valid = 0;

    for(let line of input) {
        let [first, second] = line.split(',');

        let firstArr = range(parseInt(first.split('-')[0]), parseInt(first.split('-')[1]));
        let secondArr = range(parseInt(second.split('-')[0]), parseInt(second.split('-')[1]));
            
        for(let n of firstArr) {
            if(secondArr.includes(n)) {
                valid++;
                break;
            }
        }


    }


    console.log(valid);


}
p2()