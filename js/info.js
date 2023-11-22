// Tinggal ubah jalan sama koordinat x sama y nya
// Bisa disesuaikan isinya

const infoCluster = {
    "Samarinda Utara":{
        "X" : "0,47/km2",
        "Luas" : " 229,52km2",
        "jalan" : "<li>Jl. Betapus</li> <li>Jl. Bengkuring Raya</li>"
    },
    "Samarinda Ilir":{
        "X" : "4,03/km2",
        "Luas" : " 17,18km2",
        "jalan" : "<li>Jl. Biawan & Jelawat</li> <li>Jl. RS Islam</li> <li>Jl. Selili</li>"
    },
    "Samarinda Kota":{
        "X" : "2,93/km2",
        "Luas" : " 11,12km2",
        "jalan" : "<li>Jl. Muso Salim</li> <li>Jl. Gajah Mada</li>"
    },
    "Samarinda Ulu":{
        "X" : "5,99/km2",
        "Luas" : " 22,12km2",
        "jalan" : "<li>Jl. M. Yamin</li> <li>Jl. Suryanata</li> <li>Jl. KS Tubun</li>"
    },
    "Samarinda Seberang":{
        "X" : "5,16/km2",
        "Luas" : " 12,49km2",
        "jalan" : "<li>Jl. Harapan Baru</li> <li>Jl. Mangkupalas</li>"
    },
    "Sungai Kunjang":{
        "X" : "3,12/km2",
        "Luas" : " 43,04km2",
        "jalan" : "<li>Jl. Untung Suropati</li> <li>Jl. M. Said</li>"
    },
    "Sungai Pinang":{
        "X" : "3,11/km2",
        "Luas" : " 34,16km2",
        "jalan" : "<li>Jl. Perjuangan & Pramuka</li> <li>Jl. Gerilya</li> <li>Jl. Sentosa</li>"
    },
    "Sambutan":{
        "X" : "0,57/km2",
        "Luas" : " 100,95km2",
        "jalan" : "<li>Jl. Poros Makroman-Mahkota</li> <li>Jl.Sultan Sulaiman</li>"
    },
    "Loa Janan Ilir":{
        "X" : "2,53/km2",
        "Luas" : " 26,13km2",
        "jalan" : "<li>Jl. Tani Aman</li> <li>Jl. Rapak Dalam</li>"
    },
    "Palaran":{
        "X" : "0,29/km2",
        "Luas" : " 221,29km2",
        "jalan" : "<li>Jl. Poros Simpang Pasir</li> <li>Jl. P. Diponegoro Bukuan</li>"
    },

}


function informasi(kecamatan){

    document.getElementById("info").style.backgroundColor = "white";
    document.getElementById("stat").style.display = "block";
    document.getElementById("Kecamatan").innerHTML = "Kecamatan " + kecamatan;
    // Disini kalau mau ganti format penulisan koordinatnya
    document.getElementById("Koordinat").innerHTML = "Kepadatan : "+infoCluster[kecamatan]['X']+"";
    document.getElementById("Luas").innerHTML = "Luas :"+infoCluster[kecamatan]['Luas'];
    document.getElementById("jalan").insertAdjacentHTML("beforeend",infoCluster[kecamatan]['jalan']);
}

function reset(){
    document.getElementById("info").style.backgroundColor = "transparent";
    document.getElementById("stat").style.display = "";
    document.getElementById("Kecamatan").innerHTML = "";
    document.getElementById("Koordinat").innerHTML = "";
    document.getElementById("Luas").innerHTML = "";
    document.getElementById("jalan").innerHTML = "";
}