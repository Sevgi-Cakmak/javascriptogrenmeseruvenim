/* Matematiksel Operatörler */

var x = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x*y+z);
console.log(x*(y+z));

x++;
x--;
x=x-1;
x=x+1;
console.log(x);

/* Karşılaştırma Operatörleri */

var sonuc = x > y;
console.log(sonuc);

console.log(x<y);
console.log(x>=z);
console.log(x==z);
console.log(x=="10");
console.log(x==="10");
console.log(x!=z);

/* Mantıksal Operatörler */


/* && (And) Operatörü  */

console.log((20>10) && (30<=20));

/* || (Or) Operatörü  */

console.log((20>10) || (30<=20));

/* ! (Not) Operatörü */

console.log(!(x>z));