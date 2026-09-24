/* PENGATURAN APLIKASI PENGELUARAN
 * Isi baris APPS_SCRIPT dengan link /exec dari Apps Script "Pengeluaran"
 * (Terapkan -> Kelola deployment -> salin URL aplikasi web).
 * FIREBASE dan VAPID diisi nanti saat memasang notifikasi. Semua isi file
 * ini boleh publik — kode akses TIDAK disimpan di sini.
 */
var APP_CFG = {
  APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycbzNyOWNyQuEhxtNODti6WrBo2JXi4yumyg8UkC6Ex3qEMFsVU3aLCfobslmE5e-ABzN/exec',

  FIREBASE: {
    apiKey: 'AIzaSyCJz8Q_oLoDLD-VC4qIPLn6h6wjI3HPjJM',
    authDomain: 'pengeluaran-deviden-hani.firebaseapp.com',
    projectId: 'pengeluaran-deviden-hani',
    storageBucket: 'pengeluaran-deviden-hani.firebasestorage.app',
    messagingSenderId: '668313492688',
    appId: '1:668313492688:web:82ac143c551eba351192d5'
  },
  VAPID: 'BMKaImMx98LppaI3Daqr8GkKt0voQCmUs3UHAo00oD0V-kHYIvtLAt9jX_PO3O19S1gBG2vtwnmy5YRShv3Y05I'
};
if (typeof window !== 'undefined') window.APP_CFG = APP_CFG;
