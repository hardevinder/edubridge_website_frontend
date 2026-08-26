/*
 * EduBridge website does not currently use Firebase Messaging.
 * This tiny worker exists only to retire a stale Firebase service-worker
 * registration that may have been left on localhost:3000 by another project.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
