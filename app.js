// Fungsi untuk mendapatkan pilihan acak komputer
function computerOptions() {
  let comp = Math.random();

  if (comp < 0.34) {
    return 'gajah';
  } else if (comp >= 0.34 && comp <= 0.6) {
    return 'orang';
  } else {
    return 'semut';
    k;
  }
}

// Fungsi untuk menentukan hasil permainan
function getResult(comp, player) {
  if (player === comp) {
    return 'SERI!';
  } else if (
    (player === 'gajah' && comp === 'orang') ||
    (player === 'orang' && comp === 'semut') ||
    (player === 'semut' && comp === 'gajah')
  ) {
    return 'MENANG';
  } else {
    return 'KALAH';
  }
}

// Fungsi untuk mengacak gambar setiap 100ms
function shuffleImages() {
  const imgComp = document.querySelector('.img-computer');
  const images = ['gajah', 'orang', 'semut']; //Nama gambar
  let i = 0; //Indeks untuk melacak gambar saat ini

  // Mengubah gambar setiap 100ms
  const intervalID = setInterval(() => {
    imgComp.src = `img/${images[i++]}.png`;
    if (i === images.length) i = 0; //Kondisi jika gambar sudah berakhir ulang lagi dari awal
  }, 100);
  return intervalID;
}

// Fungsi untuk menghentikan pengacakan gambar dan tampilkan hasil
function stopShuffleShow(intervalID, compOptions, results) {
  clearInterval(intervalID); //Menghentikan pengacakan gambar

  const imgComp = document.querySelector('.img-computer');
  imgComp.src = `img/${compOptions}.png`; //Mengubah gambar yang berhenti di acak dengan gambar pilihan komputer

  const result = document.querySelector('.result');
  result.textContent = results;
}

// Mengambil semua gambar dalam elemen li
const options = document.querySelectorAll('li img');

// Menambahkan event listener untuk mengambil klik pada setiap gambar
options.forEach(function (opt) {
  opt.addEventListener('click', function () {
    const startTime = new Date().getTime();

    const intervalID = shuffleImages(); //Memulai pengacakan gambar

    const compOptions = computerOptions();
    const playerOptions = opt.className;
    const results = getResult(compOptions, playerOptions);

    const imgComp = document.querySelector('.img-computer');
    imgComp.src = `img/${compOptions}.png`;

    const result = document.querySelector('.result');
    result.textContent = '';

    //Hentikan pengacakan selama 1s
    setTimeout(() => {
      stopShuffleShow(intervalID, compOptions, results);
    }, 1000);
  });
});
