// CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "ISI_AUTH_DOMAIN",
  projectId: "ISI_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// FUNGSI CEK NIM
function cekNIM() {
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
      result.innerHTML = "Terjadi kesalahan";
      console.error(err);
    });
}
