if(
    'serviceWorker' in navigator
    ){
    window.addEventListener('load',function(){
    navigator.serviceWorker.register('/sw.js',{scope:"/"}).then(function(registration){
    console.log('Service worker registration successfull with scope:', registration.scope);
    },function(err){
    console.log('Service worker registration failed: ', err);
    });
    })
    }
    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
    '/',
    'index.html',
];
self.addEventListener('install',function(event){
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache){
console.log('Opened Cache');
return cache.addAll(urlsToCache);
})
)
});