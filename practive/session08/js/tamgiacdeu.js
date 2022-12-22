let h = prompt("nhap h:");
h = parseInt(h);
console.log(h);
for (let i = 1; i <= h; i++) {
  let str = " ";
  for (j = 1; j <= h - i; j++) {
    str += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "*";
  }
  console.log(str);
}
