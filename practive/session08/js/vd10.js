
let n = prompt('Nhap n: ');
let a = prompt('Nhap a: ')
let b = prompt('Nhap b: ');
if (2*a >=b){
    console.log(parseInt(n/2)*b+(n%2)*a);
}
else {
    console.log(n*a);
}