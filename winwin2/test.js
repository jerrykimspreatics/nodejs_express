const date = new Date();

console.log(Date.now())
console.log(date.getTime() + "밀리초");
console.log(Math.round(date.getTime()/(24*60*60*1000)) + "일");
console.log(Math.round(date.getTime()/(24*60*60*1000*365)) + "년");