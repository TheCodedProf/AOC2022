import { readFileSync as rfs } from "fs";
let In=rfs('./input.txt', 'utf8').split('\r\n')
const r=(s, e)=>Array.from({length:e-s+1},(_, i)=>s+i);
console.log(((v=-1)=>{In.forEach(l=>l.split(',').map(x=>r(parseInt(x.split('-')[0]),parseInt(x.split('-')[1]))).some((_,i,[a,b])=>v+=(a.every(e=>b.includes(e))||b.every(e=>a.includes(e)))as unknown as number));return v})());
console.log(((v=-1)=>{In.forEach(l=>l.split(',').map(x=>r(parseInt(x.split('-')[0]),parseInt(x.split('-')[1]))).some((_,i,[a,b])=>v+=(a.some(e=>b.includes(e))) as unknown as number));return v})());