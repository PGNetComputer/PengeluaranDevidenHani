/* PENGATURAN APLIKASI PENGELUARAN
 * Isi baris APPS_SCRIPT dengan link /exec dari Apps Script "Pengeluaran"
 * (Terapkan -> Kelola deployment -> salin URL aplikasi web).
 * FIREBASE dan VAPID diisi nanti saat memasang notifikasi. Semua isi file
 * ini boleh publik — kode akses TIDAK disimpan di sini.
 */
var APP_CFG = {
  APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzNyOWNyQuEhxtNODti6WrBo2JXi4yumyg8UkC6Ex3qEMFsVU3aLCfobslmE5e-ABzN/exec',

  FIREBASE: null,   // nanti: { apiKey: '...', authDomain: '...', projectId: '...', messagingSenderId: '...', appId: '...' }
  VAPID: ''         // nanti: kunci Web Push dari Firebase (Cloud Messaging)
};
if (typeof window !== 'undefined') window.APP_CFG = APP_CFG;
