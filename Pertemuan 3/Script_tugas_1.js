const angka = [20, 10, 3, 30, 58, 42, 6, 9];
const huruf = ['z', 'a', 'c', 'g', 'p'];

// Mengurutkan angka secara ascending
const sortedAngka = angka.sort((a, b) => a - b);

// Mengurutkan huruf secara ascending berdasarkan urutan alfabet
const sortedHuruf = huruf.sort();

console.log("Output Angka:", sortedAngka);
console.log("Output Huruf:", sortedHuruf);
