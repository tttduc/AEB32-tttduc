let h = prompt("nhap so hang ")
h = parseInt(h);
console.log(h);

for (let i = 1; i <= h; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}