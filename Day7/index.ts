import { readFileSync } from "fs";

let input = readFileSync("./input.txt", "utf8").split("\r\n");
let eginput = readFileSync("./eginput.txt", "utf8").split("\r\n");

let sum = 0;
let directory = { "/": { size: 0 } };
let cwd = ["/"];
input.forEach((line: any) => {
    line = line.split(" ");
    if (line[0] === "$") {
        if (line[1] === "cd") {
            if (line[2] === "..") {
                cwd.pop();
            } else {
                const dirname = line[2];
                cwd.push(dirname);
                const fullpath = cwd.join("/");
                directory[fullpath] = {};
                directory[fullpath].size = 0;
            }
        }
    } else if (line[0] === "dir") return;
    else {
        let tempPath: any[] = [];
        cwd.forEach((d) => {
            tempPath.push(d);
            directory[tempPath.join("/")].size += parseInt(line[0]);
        });
    }
});

//p1
for (let dir in directory) {
    if (directory[dir].size <= 100000) sum += directory[dir].size;
}
console.log("p1: ", sum);

//p2
let closestSize = 70000000;
const sizeToFree = directory["/"].size - closestSize + 30000000;
for (let dir in directory) {
    if (directory[dir].size > sizeToFree && directory[dir].size < closestSize)
        closestSize = directory[dir].size;
}

//print to console
console.log("p2: ", closestSize);
