let a = prompt("nhap so nguyen a:");
let b = prompt("nhap so nguyen b :");
let c = prompt("nhap so nguyen c");
let d = prompt("nhap so nguyen d");
console.log(a, b, c, d);
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);
min = a;
if (b<min) min = b
if (c<min) min = c
if (d<min) min = d
console.log(min);
