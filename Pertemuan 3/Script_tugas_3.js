const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Mengubah angka menjadi nilai true jika genap dan false jika ganjil
const hasil = angka.map(num => num % 2 === 0);

console.log("Output:", hasil);