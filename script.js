const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});


// script kirim form ke wa
    function kirimKeWhatsApp() {
      // Ambil data dari form
      var nama = document.getElementById("nama").value;
      var email = document.getElementById("email").value;
      var pesan = document.getElementById("pesan").value;

      // Validasi (opsional)
      if (nama == "" || email == "" || pesan == "") {
        alert("Harap isi semua field!");
        return;
      }

      // Format pesan WhatsApp
      var nomorWhatsApp = "+6285246196402"; // Ganti dengan nomor WhatsApp tujuan
      var pesanWhatsApp = "Halo, saya mengirim pesan dari form:\n\n" +
                          "Nama: " + nama + "\n" +
                          "Email: " + email + "\n" +
                          "Pesan: " + pesan;

      // Encode pesan untuk URL
      var encodedPesan = encodeURIComponent(pesanWhatsApp);

      // Buat URL WhatsApp
      var urlWhatsApp = "https://wa.me/" + nomorWhatsApp + "?text=" + encodedPesan;

      // Buka URL WhatsApp di tab baru
      window.open(urlWhatsApp, '_blank');
    }