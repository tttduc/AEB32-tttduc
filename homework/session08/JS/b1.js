let n = prompt('Nhap n')
function checkDoiXung(ar) {
    let first = 0;
    let last = ar.length - 1;
    for ( ;first < last; first++, last--) {
        if(ar[first] !== ar[last]){
            return false;
        }  
        return true;
    }
}
alert(checkDoiXung(prompt('Nhap ')))
