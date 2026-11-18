/* MBA Tournaments Production install shell — no user/auth/finance data is cached. */
const CACHE_NAME='mba-prod-pwa-shell-20261117-final-ui-v2';
const OFFLINE='./offline.html';
const SHELL=['./offline.html','./manifest.webmanifest','./mba-icon-192.png','./mba-icon-512.png','./mba-icon-maskable-512.png','./venue-location-qr.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('mba-prod-pwa-shell-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return; // Firebase/auth/CDN requests are never intercepted.
  if(request.mode==='navigate'){
    // Always fetch the latest app online. Never cache personalized page responses.
    event.respondWith(fetch(request).catch(()=>caches.match(OFFLINE)));
    return;
  }
  const file=url.pathname.split('/').pop();
  if(!['manifest.webmanifest','mba-icon-192.png','mba-icon-512.png','mba-icon-maskable-512.png','venue-location-qr.png','offline.html'].includes(file))return;
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
