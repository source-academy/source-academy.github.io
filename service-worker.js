self.addEventListener('install', function(event) {
  self.skipWaiting();
  self.registration.unregister();
  self.clients.claim();
});

self.registration.unregister();
