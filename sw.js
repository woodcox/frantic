var d=["index.html","ico.svg"];self.addEventListener("install",a=>{self.skipWaiting();a.waitUntil(caches.open("scrammbl_0.0.1").then(c=>c.addAll(d)))});self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(c=>Promise.all(c.filter(b=>{if("scrammbl_0.0.1"!=b)return!0}).map(b=>caches.delete(b)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",a=>{a.request.url!=self.registration.scope&&a.respondWith(caches.match(a.request,{}).then(c=>c||fetch(a.request).then(b=>{var e=b.clone();caches.open("scrammbl_0.0.1").then(f=>f.put(a.request,e));return b})))});
