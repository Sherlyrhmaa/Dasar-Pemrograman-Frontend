$(document).ready(function () {
    // Daftar kota dan biaya yang sesuai dengan tabel
    const kotaList = ["Banyuwangi", "Jember", "Probolinggo", "Surabaya"];
    const biayaBerat = {
        "0-1": 1500,
        "1-5": 2500,
        "5-10": 3500,
        "10+": 4500
    };
    const biayaJarak = {
        "Banyuwangi": { "Banyuwangi": 5000, "Jember": 7500, "Probolinggo": 10000, "Surabaya": 15000 },
        "Jember": { "Banyuwangi": 7500, "Jember": 5000, "Probolinggo": 8500, "Surabaya": 12500 },
        "Probolinggo": { "Banyuwangi": 10000, "Jember": 8500, "Probolinggo": 5000, "Surabaya": 6500 },
        "Surabaya": { "Banyuwangi": 15000, "Jember": 12500, "Probolinggo": 6500, "Surabaya": 5000 }
    };

    // Mengisi dropdown kota asal dan tujuan dengan daftar kota
    kotaList.forEach(kota => {
        $('#kotaAsal, #kotaTujuan').append(new Option(kota, kota));
    });

    // Fungsi untuk menghitung biaya berdasarkan berat
    function getBiayaBerat(berat) {
        if (berat <= 1) return biayaBerat["0-1"];
        if (berat <= 5) return biayaBerat["1-5"];
        if (berat <= 10) return biayaBerat["5-10"];
        return biayaBerat["10+"];
    }

    // Fungsi untuk menghitung total biaya pengiriman
    function hitungBiayaPengiriman() {
        const berat = parseFloat($('#beratBarang').val());
        const kotaAsal = $('#kotaAsal').val();
        const kotaTujuan = $('#kotaTujuan').val();

        if (isNaN(berat) || berat <= 0 || !kotaAsal || !kotaTujuan) {
            $('#totalBiaya').val("");
            return;
        }

        // Hitung biaya berat dan biaya jarak
        const biayaBeratFinal = getBiayaBerat(berat);
        const biayaJarakFinal = biayaJarak[kotaAsal][kotaTujuan];

        // Total biaya
        const totalBiaya = biayaBeratFinal + biayaJarakFinal;

        // Menampilkan total biaya dengan format Rupiah
        $('#totalBiaya').val("Rp. " + totalBiaya.toLocaleString("id-ID"));
    }

    // Event listener untuk menghitung biaya setiap kali kota tujuan dipilih atau berat barang diubah
    $('#kotaTujuan').on('change', hitungBiayaPengiriman);
    $('#beratBarang').on('input', hitungBiayaPengiriman);
});
