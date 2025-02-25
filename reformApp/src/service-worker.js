const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
          '/index.html',
          '/SuLi.html',
          '/policy.html',
          '/app.html',
          '/css/style.css',
          '/css/SuLi.css',
          '/css/policy.css',
          '/css/app.css',
          '/src/main.js',
          '/src/SuLi.js',
          '/src/scrollreveal.js',
          '/img/reformhaz.png',
          '/img/hg.png',
          '/img/logo192.png',
          '/img/logo.png',
          '/manifest.json'
        ];
  
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Aktiválási esemény: régi cache törlése
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch esemény: fájlok betöltése a cache-ből
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});