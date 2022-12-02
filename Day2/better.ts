import { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf8').split('\n');

let points: number = 0;
let pointsDiff: number = 0;

//A for Rock, B for Paper, and C for Scissors
//X for Rock, Y for Paper, and Z for Scissors
//1 for Rock, 2 for Paper, and 3 for Scissors
//0 if you lost, 3 if the round was a draw, and 6 if you won

for (let line of input) {
    if(!line) continue;
    let [opponent, myself] = line.split(' ');
    switch(opponent) {
        case "A": //Rock
            if (myself == 'X') { //Rock
                points += 4; //Tie = 3 + 1
                pointsDiff = 4;
            } else if (myself == 'Y') { //Paper
                points += 8; //Win = 6 + 2
                pointsDiff = 8;
            } else { //Scissors
                points += 3; //Lose = 0 + 3
                pointsDiff = 3;
            }
            break;
        case "B": //Paper
            if (myself == 'X') { //Rock
                points += 1; //Lose = 0 + 1
                pointsDiff = 1;
            } else if (myself == 'Y') { //Paper
                points += 5; //Tie = 3 + 2
                pointsDiff = 5;
            } else { //Scissors
                points += 9; //Win = 6 + 3
                pointsDiff = 9;
            }
            break;
        case "C": //Scissors
            if (myself == 'X') { //Rock
                points += 7; //Win = 6 + 1
                pointsDiff = 7;
            } else if (myself == 'Y') { //Paper
                points += 2; //Lose = 0 + 2
                pointsDiff = 2;
            } else { //Scissors
                points += 6; //Tie = 3 + 3
                pointsDiff = 6;
            }
            break;
    }
    console.log((pointsDiff > 6 ? "Win" : ( pointsDiff > 3 ? "Tie" : "Lost")), line.replace('B', 'Paper').replace('C', 'Scissors').replace('A', 'Rock').replace('X', 'Rock').replace('Y', 'Paper').replace('Z', 'Scissors'));
    console.log("Points:", points, "PointsDiff:", pointsDiff);
}

console.log("p1", points);