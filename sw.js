self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'index.html',
      'index.js',
      'index.css',
      'agumon-1.png',
      'agumon-2.png',
      'gabumon-1.png',
      'gabumon-2.png',
      'icon/tentomon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});