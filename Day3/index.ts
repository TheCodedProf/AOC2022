import { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf8').split('\r\n')

function p1() {

    let totalCopies: string[] = [];

    input.forEach(line => {

        let l1 = line.substring(0,line.length/2);
        let l2 = line.substring(line.length/2);

        for(let c of l1.split('')) {
            if(l2.includes(c)) {
                totalCopies.push(c);
                break;
            }
        }
    });

    let number: number = 0;
    
    totalCopies.forEach(c => c.toUpperCase() == c ? number += (c.charCodeAt(0) - 38) : number += (c.charCodeAt(0).valueOf() - 96))
    
    console.log(number)
}

function p2() {

    let totalCopies: string[] = [];

    let newInput: string[][] = input.reduce((resultArray: any[], item, index) => {
     
        const chunkIndex = Math.floor(index/3);

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;

        
    }, []);



    for(let group of newInput) {
    
        let l1 = group[0].split('');
        let l2 = group[1].split('');
        let l3 = group[2].split('');

        for(let c of l1) {
            if(l2.includes(c) && l3.includes(c)) {
                totalCopies.push(c);
                break;
            }
        }

    };

    let number: number = 0;
    
    totalCopies.forEach(c => c.toUpperCase() == c ? number += (c.charCodeAt(0) - 38) : number += (c.charCodeAt(0).valueOf() - 96))

    console.log(number);

}

p2()