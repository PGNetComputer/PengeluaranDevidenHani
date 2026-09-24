/* Service worker Pengeluaran:
 *  - menyimpan tampilan supaya tetap terbuka walau tanpa sinyal
 *  - menerima notifikasi Firebase (kalau sudah diisi di config.js)
 * Tidak menyentuh panggilan ke Apps Script — data selalu langsung dari server.
 */
var CACHE = 'pengeluaran-v1';
var ASET = ['./', 'index.html', 'config.js', 'manifest.json', 'ikon-192.png', 'ikon-512.png'];

try { importScripts('config.js'); } catch (e) {}
var CFG = self.APP_CFG || {};
if (CFG.FIREBASE) {
  try {
    importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
                  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
    firebase.initializeApp(CFG.FIREBASE);
    firebase.messaging();   // notifikasi latar ditampilkan otomatis oleh Firebase
  } catch (e) {}
}

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASET); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.search.indexOf('callback=') > -1) return;   // Apps Script & Firebase lewat
  e.respondWith(fetch(e.request).then(function (r) {
    var salin = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, salin); });
    return r;
  }).catch(function () {
    return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); });
  }));
});
self.addEventListener('notificationclick', function (e) {
  var link = (e.notification.data && (e.notification.data.FCM_MSG && e.notification.data.FCM_MSG.fcmOptions && e.notification.data.FCM_MSG.fcmOptions.link)) || './';
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (ws) {
    for (var i = 0; i < ws.length; i++) { if ('focus' in ws[i]) { ws[i].navigate(link); return ws[i].focus(); } }
    return self.clients.openWindow(link);
  }));
});
