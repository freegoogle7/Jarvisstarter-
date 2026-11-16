const CACHE = "jarvis-starter-v2";
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(["./", "./index.html", "./manifest.json", "./icon-180.png", "./icon-192.png", "./icon-512.png"]))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
