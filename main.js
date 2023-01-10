document.getElementById("wrap").innerHTML = "Sekolahkoding";
        

deklarasi variabel
Gunakan titik sbg pengganti koma
var x = 172364;
var tabungan = 22122004;
var angka = 1000;
var angka2 = 123;
var text = "Anak Temu"

Operator matematika
angka_hasil++; //Menjumlahkan dengan satu
angka--; //Mengurangi dengan satu

var angka2 = angka2 + angka; 


-----METODE NUMBER------
tiFixed(n) toString() random() min(a, b, c) max(a, b, c)
 var angka_hasil = Math.min(angka, angka2, 560);

 round() ceil() floor() ObjectMethods(contoh: abs, log) r
/*
- round = untuk membulatkan ke bilangan terdekat
- floor = untuk membulatkan bilangan kebawah
- ceil = untuk membulatkan bilangan keatas
- min = untuk mencari bilangan terkecil
- max = untuk mencari bilangan terbesar
*/
random spesific formula -> Math.floor(Math.random()*x) + 1;
var x = 10; // Range atau jarak
var y = 5; //batas minimal
Batas maksimal dari angka random adalah hasil penjumlahan dari = x + y
var angka_hasil = Math.floor(Math.random() * x) + y;

-----METODE STRING------
Length IndexOf LastIndexOf Search charAt replace UpperCase Lowercase
substring(start, end)  substr(start, length)

var nama = "221"
var hasil = parseInt(nama) + 10;

        function printext() 
        {
            var x = "Sekolah Anak NI"
            document.getElementById("wrap").innerHTML = x;
        }

        printext();

            //------Parameter pada function--
            function menjumlahkan(angka, angka2 ) {
            return angka + angka2;
            }
            
            var text = menjumlahkan(10, 50);
            document.getElementById("wrap").innerHTML = text;


            var text = "sekolah koding 123";

            function apa() {
                // Local variabel
                // var text2 = " status lain"

                // Global Variabel
                // text2 = " Status lain"

                text = "Situs lain";
            }
            
            apa();

                    // tipe data Array
        // Array dimulai dari angka 0
        kotak[2] = "Gunawan";
        
        
        var text = "Namanya adalah " + kotak[2];

        // sort, reverse, concat, length, join("separater")
        var namaorg = ["Hilman ", "Fadil ", "Xie "];
        var namaorg1 = ["Kokoh ", "Cina ", "Xue "];
        var namaorg2 = ["Farhan ", " lao"]

        // Splice->add(mulai, dihapus?, isi), splice->remove
        // pop, push, shift(), unshift(),
        // namaorg.splice(2, 0,);

        namaorg.push(" R7 "); //menambahkan nama di akhir
        namaorg.pop(); //menghilangkan nama di akhir

        namaorg.unshift("abdullah "); // menambahkan nama di awal
        namaorg.shift(); //Menghilangkan nama di awal


        // -----IF ELSE Section-----

        if (programmer == barang) 
        {
            document.getElementById("wrap").innerHTML = "Uang Programmer tidak cukup";
        }else if ( designer == barang ) 
        {
            document.getElementById("wrap").innerHTML = "Uang Designer cukup";
        } else if (programmer > barang) 
        {
            document.getElementById("wrap").innerHTML = "Uang Programmer lebih dari cukup";
            
        }
        else {
            document.getElementById("wrap").innerHTML = "Uang tidak cukup";
        }

        var programmer = 30000;
        var designer = 20000;
        var  barang  = 25000

        // Nested if
        if (programmer > barang) 
        {
            if (programmer > barang*2) {
                document.getElementById("wrap").innerHTML = "Programmer bisa beli 2 barang"; 
            }  else{
                document.getElementById("wrap").innerHTML = "Programmer terlalu miskin"; 
            }  
        }

        // ===== FOR-LOOP =====