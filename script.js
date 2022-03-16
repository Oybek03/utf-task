// utf task
let a = prompt([]);
let buw = +"";
let bush = [];
let ikkilik = [];
let qaytiw = [];
for (let i = 0; i < a.length; i++) {
  let bir = Number(a[i].charCodeAt());
  buw = buw + bir;
  bush.push(bir);
}
// console.log(buw); utf lar yigindisi
console.log(bush);
for (let q = 0; q < bush.length; q++) {
  let code = String.fromCharCode(bush[q]);
  qaytiw.push(code);
}
console.log(qaytiw);

// let binary = "";                  ikkilikdan onlikka utiw
// let decimal = parseInt(binary, 2);
// console.log(decimal);
for (let j = 0; j < bush.length; j++) {
  const number = parseInt(bush[j]);
  const result = number.toString(2);
  ikkilik.push(result);
  // console.log(result); result ni yoyib chiqaradi
}
console.log(ikkilik);
