const CACHE_NAME = 'recipe-cache-v1';
const urlsToCache = [
  'recipekeeperv3.html',
  'manifest.json',
  'app.css',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);
  if (urlsToCache.includes(requestURL.pathname.split('/').pop())) {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});

