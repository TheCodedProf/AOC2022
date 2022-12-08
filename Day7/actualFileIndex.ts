import { closeSync, mkdirSync, openSync, PathLike, readdirSync, readFileSync, stat, statSync, writeFileSync, writeSync } from "fs";
import path from "path";

mkdirSync(path.join(__dirname, './outDir'), { recursive: true })

const newFile = (out: string[], name: string, size: number) => {
    if(size < 0) return console.log('negative not allowed')
    let p = path.join(__dirname, ...out);
    let f = openSync(path.join(p, name), 'w');
    size > 0 ? writeSync(f, Buffer.alloc(1), 0, 1, size - 1) : null;
    closeSync(f);
}




let input = readFileSync("./input.txt", "utf8").split("\r\n");
let eginput = readFileSync("./eginput.txt", "utf8").split("\r\n");

let outDir = ['./outDir'];

input.forEach((line: any) => {
    line = line.split(" ");

    if (line[0] === "$") {
        if (line[1] === "cd") {
            if (line[2] === "..") {
                outDir.pop();
            } else {
                if(line[2] === '/') {
                    outDir = ['./outDir'];
                    return;
                }
                outDir.push(line[2]);
            }
        }
    } else if (line[0] === "dir") {
        mkdirSync(path.join(__dirname, ...outDir, line[1]), { recursive: true })
    } else {
        newFile(outDir, line[1], parseInt(line[0]));
    }

});

//p1 
let sum = 0;

const p1 = (dir: PathLike) => {
    let files = readdirSync(dir, { withFileTypes: true });
    let tSum = 0;
    files.map( file => {
        let p = path.join(dir.toString(), file.name);
        if(file.isDirectory()) p1(p);
        let size;
        if(file.isFile()) ({ size } = statSync(p));
        tSum += size;
    })
    if(tSum <= 100000) sum += tSum;

}
p1(path.join(__dirname, './outDir'));

console.log(sum)

//p2
