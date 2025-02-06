self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/appdeivid/',
        '/appdeivid/index.html',
        '/appdeivid/manifest.json',
        'https://as1.ftcdn.net/jpg/04/09/67/52/1000_F_409675278_A7tGsOx8xbDfgJ7inemusrUq6epnrkzr.jpg'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});