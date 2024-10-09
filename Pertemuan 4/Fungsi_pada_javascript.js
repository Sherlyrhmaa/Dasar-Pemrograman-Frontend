//Declaratiive Function
function fooBar(param1,param2,dst){
    //function body
}

//Anonymous Function
const foobar = function (param1,param2,dst){
    //function body
}
foobar('abc',123,'etc');//pemanggilan function

//Arrow Function
const foobar1 = (param1,param2,dst) => {
    //function body
}

foobar1('abc',123,'etc'); //pemanggilan function

//Deklarasi arrow fufnction jika langsung
//memberikan return value
const penjumlahan = (bil1, bil2) => bil1 + bil2;

function penjumlahan(bil1,bil2){  //setara dengan
    return bil1 + bil2;
}

//Required Parameter
const halo = nama => `Halo ${nama}!`;

const penjumlahan1 = (a,b) => a+b;

const luasLingkaran = radius => {
    const PI = 22/7;

    return PI * radius ** 2;
}

//Optitonal Parameter
const penjumlahan2 = (a, b=0) => a+b;

//Callback Function
const tampilkanHasil = (hasil) => alert(`Hasil = ${hasil}`)

const penjumlahan3 = (a,b,display) => {
    let hasil =a + b;
    display(hasil); //callback function
}

penjumlahan3(9,6,tampilkanHasil);//Hasil = 15

penjumlahan(9,6, (hasil) => alert(`Wah, hasilnya adalah ${hasil}`));//Wah, hasilnya adalah 15

//Overflow Argument
const penjumlahan = (a,b) => a + b;
let hasil = penjumlahan(3,4,5,6);

alert(`Hasil penjumlahan = ${hasil}`); //Hasil penjumlahan = 7

//Rest Parameter
function jumlahkanSemuanya (...bilangan){
    let total = 0;

    for(let bil of bilangan)
        total += bil;

    return total;
}

let hasil1 = jumlahkanSemuanya(1,2,3,4,5,6);
let hasil2 = jumlahkanSemuanya(9,8,7);

alert(hasil1); //21

alert(hasil2); //24