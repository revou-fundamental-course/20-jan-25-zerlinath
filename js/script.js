/* File Java Script Kalkulator BMI */

console.log('Hello word!')

function kalkulatorbmi() {

    /* Mengambil data BMI */
    let weight = document.getElementById('input-berat-badan').value;
    let age = document.getElementById('input-usia').value;
    let height = document.getElementById('input-tinggi-badan').value;

    console.log(weight);
    console.log(age);
    console.log(height);

    /* Validasi apabalia input tidak sesuai */
    if (!weight || !height || !age) {
        alert('Isi dulu kolomnya dengan nilai yang valid!');
        return;
    }

    /* Perhitungan BMI */
    let resultbmi = weight / ((height / 100) * (height /100));
    resultbmi = resultbmi.toFixed(2);

    /* Kategori hasil perhitungan BMI dan Simpulan input pengguna */

    let kategori = '';
    let simpulan = '';
    if (resultbmi < 18.5) {
        kategori = 'Berat Badan Kurang';
        simpulan = 'Anda memiliki berat badan kurang.';
    } else if (resultbmi >= 18.5 && resultbmi <= 24.9) {
        kategori = 'Berat Badan Ideal';
        simpulan = 'Anda memiliki berat badan ideal.';
    } else if (resultbmi >= 25 && resultbmi <= 29.9) {
        kategori = 'Berat Badan Lebih';
        simpulan = 'Anda memiliki berat badan berlebih.';
    } else {
        kategori = 'Obesitas';
        simpulan = 'Anda mengalami obesitas.';
    }

    /* Menampilkan Perhitungan BMI */
    document.getElementById('result-bmi').innerText = resultbmi;
    document.getElementById('kategori').innerText = kategori;
    document.getElementById('simpulan-input').innerText = simpulan;
}