function segitiga(panjang) {
    let string = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            s += j + ' ';
        }
        s += '\n';
    }
    return string;
}
console.log(segitiga(10));
