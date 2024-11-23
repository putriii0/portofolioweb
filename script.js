// Inisialisasi AOS untuk animasi scroll
AOS.init({
  duration: 1200, // Durasi animasi dalam milidetik
  once: true,     // Animasi hanya berjalan sekali
});

// Menangani form contact untuk menampilkan pesan sukses
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Menampilkan pesan sukses dengan animasi
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");

  // Menghapus data form (opsional)
  this.reset();

  // Menyembunyikan pesan sukses setelah beberapa detik (opsional)
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 3000); // 3000 ms = 3 detik
});
