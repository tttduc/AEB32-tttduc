let n = prompt("nhap so nguyen");
console.log(n);
if (n < 2) {
  console.log(n + " khong phai la so nguyen to");
}
count = 0;
for (let i = 2; i < n - 1; i++) {
  if (n % i === 0) {
    count++;
  }
}
if (count === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
