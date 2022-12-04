import { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf8').split('\n');

let points: number = 0;

const pointsValue = {
    "win": 6,
    "tie": 3,
    "lose": 0,
    "X": 1,
    "Y": 2,
    "Z": 3 
}

input.forEach(value => {
    let [opponent, myself] = value.split(' ');
    let result = "lose";
    points += pointsValue[myself];
    switch(opponent) {
        case "A":
            if (myself == 'X') {
                result = "tie";
            } else if (myself == 'Y') {
                result = "win";
            }
            break;
        case "B":
            if (myself == 'Y') {
                result = "tie";
            } else if (myself == 'Z') {
                result = "win";
            }
            break;
        case "C":
            if (myself == 'Z') {
                result = "tie";
            } else if (myself == 'X') {
                result = "win";
            }
            break;
    }
    points += pointsValue[result];
});
console.log("p1", points);

const pointsValue2 = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

points = 0;
input.forEach(line => {
    let [opponent, result] = line.split(' ');
    points += pointsValue2[result];

    switch(opponent) {
        case "A":
            if(result == 'Z') {
                points += pointsValue['X'];
            } else if (result == 'Y') {
                points += pointsValue['Z'];
            } else {
                points += pointsValue['Y'];
            }
            break;
        case "B":
            if(result == 'X') {
                points += pointsValue['Y'];
            }
            else if (result == 'Z') {
                points += pointsValue['X'];
            }
            else {
                points += pointsValue['Z'];
            }
            break;
        case "C":
            if(result == 'Y') {
                points += pointsValue['Z'];
            }
            else if (result == 'X') {
                points += pointsValue['Y'];
            } else {
                points += pointsValue['X'];
            }
            break;
    }
});

console.log("p2", points);