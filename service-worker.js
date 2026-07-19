const CACHE_NAME = 'cog-bible-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/logo.jpg',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets for COG Bible...');
        return cache.addAll(ASSETS_TO_CACHE)
          .catch(err => {
            console.log('Some assets failed to cache:', err);
          });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('Service Worker activated and ready to handle fetch events');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached asset if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response for caching
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                try {
                  // Only cache GET requests
                  if (event.request.method === 'GET') {
                    cache.put(event.request, responseToCache);
                  }
                } catch (e) {
                  console.log('Caching error for:', event.request.url, e);
                }
              });

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html')
                .then(cached => {
                  if (cached) {
                    return cached;
                  }
                  // Fallback offline page
                  return new Response(
                    '<html><head><title>COG Bible - Offline</title></head><body><h1>COG (T.J.R) Bible</h1><p>You are currently offline. Please check your internet connection.</p></body></html>',
                    {
                      status: 503,
                      statusText: 'Service Unavailable',
                      headers: new Headers({
                        'Content-Type': 'text/html'
                      })
                    }
                  );
                });
            }
            
            // Return a simple offline message for other requests
            return new Response('Offline - Please check your connection', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Handle push notifications (optional)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'New content available in COG Bible',
    icon: '/logo.jpg',
    badge: '/logo.jpg',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification('COG Bible', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  const url = event.notification.data && event.notification.data.url 
    ? event.notification.data.url 
    : '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(windowClients => {
        // Check if there's already a window/tab open with the target URL
        for (let client of windowClients) {
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window/tab
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});
