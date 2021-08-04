const CACHE_ELEMENTS=[
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./components/Contador.js"
]

const CACHE_NAME ="v1_cache_contador_react"

const self = this

// Instala nuevo caché
self.addEventListener("install", (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            cache.addAll(CACHE_ELEMENTS)
            .then(()=>{
                self.skipWaiting()
            })
            .catch(console.log)
        })
    )
})

// Elimina cachés antiguos 
self.addEventListener("activate", (e)=>{
    
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(cacheNames.map(cacheName =>{
                return cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
            }))
        })
        .then(()=>self.clients.claim())
    )
})


self.addEventListener("fetch", (e)=>{
    
    e.respondWith(caches.match(e.request).then((res)=>{
        if(res){
            return res
        }
        return fetch(e.request)
    }))
})