import { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf8').split('\n');

function p1() {
    let won: number = 0;
    let tied: number = 0;
    let lost: number = 0;
    let points: number = 0;
    //X for Rock, Y for Paper, and Z for Scissors
    //1 for Rock, 2 for Paper, and 3 for Scissors
    //0 if you lost, 3 if the round was a draw, and 6 if you won

    input.forEach(value => {
        switch(value[2]) {
            case "X":
                points += 1;
                break;
            case "Y":
                points += 2;
                break;
            case "Z":
                points += 3;
                break;
        }
        switch (value[0]) {
            case 'A':
                if (value[2] == 'Y') {
                    won++;
                } else if (value[2] == 'X') {
                    tied++;
                } else {
                    lost++;
                }
                break;
            case 'B':
                if (value[2] == 'Z') {
                    won++;
                } else if (value[2] == 'Y') {
                    tied++;
                } else {
                    lost++;
                }
                break;
            case 'C':
                if (value[2] == 'X') {
                    won++;
                } else if (value[2] == 'Z') { 
                    tied++;
                } else {
                    lost++;
                }
                break;
        }
    });

    points += won * 6 + tied * 3;

    console.log("p1", won, tied, lost, points);
}

function p2() {
    let won: number = 0;
    let tied: number = 0;
    let lost: number = 0;
    let points: number = 0;
    //X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
    //1 for Rock, 2 for Paper, and 3 for Scissors
    //0 if you lost, 3 if the round was a draw, and 6 if you won

    input.forEach(value => {
        switch(value[2]) {
            case "Z":
                won++;
                if (value[0] == 'A') { //rock
                    points += 2;
                } else if (value[0] == 'B') { //paper
                    points += 3;
                } else { //scissors
                    points += 1;
                }
                break;
            case "Y":
                tied++;
                if (value[0] == 'A') { //rock
                    points += 1;
                } else if (value[0] == 'B') { //paper
                    points += 2;
                } else { //scissors
                    points += 3;
                }
                break;
            case "X":
                lost++;
                if (value[0] == 'A') { //rock
                    points += 3;
                } else if (value[0] == 'B') { //paper 
                    points += 1;
                } else { //scissors
                    points += 2;
                }
                break;
        }
    });

    points += won * 6 + tied * 3;

    console.log("p2", won, tied, lost, points);
}