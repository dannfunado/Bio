self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ugc-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "img/mi_foto.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
