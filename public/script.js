// 🔥 FIREBASE CONFIG (punyamu)
const firebaseConfig = {
  apiKey: "AIzaSyCp3MnR7JoaqJYeV-wIvya-lm5dsk_AUUU",
  authDomain: "pengumumanbemsinergi.firebaseapp.com",
  projectId: "pengumumanbemsinergi"
};

// 🔥 INIT FIREBASE
firebase.initializeApp(firebaseConfig);

// 🔥 INIT FIRESTORE
const db = firebase.firestore();

// =========================
// FUNGSI CEK NIM
// =========================
function cekNIM() {
  console.log("TOMBOL DIKLIK"); // debug

  const nim = document.getElementById("nim").value;
  const result = document.getElementById("result");

  if (!nim) {
    result.innerHTML = "⚠️ NIM tidak boleh kosong";
    result.style.color = "orange";
    return;
  }

  db.collection("peserta_bem")
    .where("nim", "==", nim)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        result.innerHTML = "❌ Data tidak ditemukan";
        result.style.color = "red";
        return;
      }

      snapshot.forEach(doc => {
        const data = doc.data();

        result.innerHTML = `
          <p>Nama: <b>${data.nama}</b></p>
          <p>Prodi: <b>${data.prodi}</b></p>
          <p>Status: <b>${data.status}</b></p>
        `;

        result.style.color = data.status === "LOLOS" ? "green" : "red";
      });
    })
    .catch(err => {
      console.error(err);
      result.innerHTML = "❌ Terjadi kesalahan sistem";
      result.style.color = "red";
    });
}
