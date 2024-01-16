// Buat sebuah fungsi untuk tombol Convert yang didalamnya mempunyai variable dan rumus untuk mengubah Centimeter ke Inch, Meter, dan Feet
function convert() {
  var cm = document.getElementById("cm").value;
  var convert = document.getElementById("pilihan").value;
  var inch = document.getElementById("cm").value;
  var hasilInch = inch * 0.393701;
  var meter = document.getElementById("cm").value;
  var hasilMeter = meter / 100;
  var feet = document.getElementById("cm").value;
  var hasilFeet = feet * 0.032804;
  var result = document.getElementById("result");

  // Membuat sebuah kondisi dimana jika kita tidak menginputkan nilai, maka akan muncul alert dan kita tidak bisa mengkonversi nilai sebelum kita menginputkan sebuah angka
  if (cm <= 0) {
    alert("Please Enter the Correct Number!");
  } else if (convert == "inch") {
    result.innerHTML ="<br><br>" + "Your body height is " + hasilInch.toFixed(2) + " Inch";
  } else if (convert == "meter") {
    result.innerHTML ="<br><br>" + "Your body height is " + hasilMeter.toFixed(2) + " Meter";
  } else if (convert == "feet") {
    result.innerHTML ="<br><br>" + "Your body height is " + hasilFeet.toFixed(2) + " Feet";
  }
  // toFixed(nilai) digunakan untuk membulatkan ke tempat desimal tertentu. Dalam kasus ini, toFixed(2) digunakan untku menempatkan 2 angka di belakang koma.
}
