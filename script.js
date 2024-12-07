// Data Headline
const headlines = [
    "Pembicara : Pdt.Hada\nTanggal\t: 20 Desember 2024\nWaktu\t: 18.00\nTempat\t: Yon zipur 9 Ujung Berung",
    "Pembicara : Penatua di Sub Rayon\nTanggal\t: 22 Desember 2024\nWaktu\t: 18.30\nTempat\t: Sub Rayon Masing-Masing",
    "Pembicara : Pdt.Em.Bombong\nTanggal\t: 25 Desember 2024\nWaktu\t: 06.30\nTempat\t: Yon zipur 9 Ujung Berung"
];

// Fungsi untuk menampilkan gambar dengan detail
function showImageWithDetails(index) {
    // Pilih elemen container utama
    const slideshowContainer = document.querySelector(".slideshow-container");

    // Tambahkan kelas untuk memperbesar kontainer
    slideshowContainer.classList.add("expanded");

    // Hapus konten slideshow asli
    slideshowContainer.innerHTML = "";

    // Buat kontainer baru untuk gambar dan detail
    const container = document.createElement("div");
    container.className = "image-detail-container";

    // Tambahkan gambar
    const img = document.createElement("img");
    img.src = `attribute/${index + 2}.png`; // Sesuaikan nama file gambar
    img.alt = `Headline ${index + 1}`;
    container.appendChild(img);

    // Tambahkan detail teks
    const details = document.createElement("div");
    details.className = "headline-details";
    details.textContent = headlines[index];
    container.appendChild(details);

    // Tambahkan tombol kembali
    const backButton = document.createElement("button");
    backButton.textContent = "X";
    backButton.style.marginTop = "20px"; // Jarak atas
    backButton.style.padding = "10px 20px"; // Padding dalam tombol
    backButton.style.cursor = "pointer"; // Pointer saat hover
    backButton.style.position = "absolute"; // Atur posisi absolut
    backButton.style.top = "10px"; // Jarak dari atas
    backButton.style.right = "10px"; // Jarak dari kanan
    backButton.style.zIndex = "1000"; // Pastikan muncul di atas elemen lain
    backButton.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Warna tombol (oranye)
    backButton.style.color = "white"; // Warna teks putih
    backButton.style.border = "none"; // Hapus border
    backButton.style.borderRadius = "5px"; // Buat sudut melengkung
    backButton.onclick = () => location.reload(); // Muat ulang halaman untuk kembali ke slideshow
    container.appendChild(backButton);

    // Tambahkan kontainer ke slideshow utama
    slideshowContainer.appendChild(container);

    // Aktifkan transisi setelah elemen ditambahkan
    setTimeout(() => {
        container.classList.add("show");
    }, 50); // Beri sedikit delay untuk efek transisi
}
