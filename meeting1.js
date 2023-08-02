//ALGORITMA => KERANGKA BERPIKIR SISTEMATIS SECARA LOGIS UNTUK MENYELESAIKAN MASALAH

// let number = prompt("masukkan angka :");
// if(number<= -1) {
//     document.write("negatif");
// }else if(number>=1){
//     document.write("positif");
// }else{
//     document.write("netral");
// }

let sumbuX = prompt("positif sumbu X atau negatif");
let sumbuY = prompt("positif sumbu Y atau negatif");

if(sumbuX > 0 && sumbuY > 0 ) {
   document.write("player berada di kanan atas")
}else if(sumbuX > 0 && sumbuY < 0){
    document.write("player berada di kiri bawah")
}else if(sumbuX > 0 && sumbuY >0){
    document.write("player berada di kanan bawah")
}else if(sumbuX > 0 && sumbuY < 0){
    document.write("player berada di kiri bawah")
}else if(sumbuX ==0 && sumbuY ==0 ) {
    document.write("player berada di atas")
}else if(sumbuX >0 && sumbuY ==0) {
    document.write("player berada di bawah")
}else if(sumbuX ==0 && sumbuY ==0 ){
    document.write("player berada di bawah")
} else {
    document.write("Player tidak ditemukan")
}