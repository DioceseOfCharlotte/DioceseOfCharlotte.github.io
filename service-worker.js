/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["basic.html","0b358433ea340a19ef2be7c9ed8621c2"],["fonts/RobotoCondensed-Bold.woff","b957df7eb343c0e307cc3c4b5e642b0a"],["fonts/RobotoCondensed-BoldItalic.woff","fea624b4c2620b6f5db428e227f2845c"],["fonts/RobotoCondensed-Italic.woff","f6a7296c31954622227519621438298d"],["fonts/RobotoCondensed-Light.woff","febf32a2c55979f8644ba9dfe804ca2b"],["fonts/RobotoCondensed-LightItalic.woff","f09b84ef0af8be7687407830447ec594"],["fonts/RobotoCondensed-Regular.woff","94e480548f3165c92301d1e317593e90"],["home-one.html","0af7aba4f245d207c31eae7a55ee4565"],["home-two.html","4728d24cad370e24d0edddb089c44d9a"],["images/StPats.jpg","85df37bba82bfa2d4815e4c6f98f0fee"],["images/StPats2.jpg","fca21e47f891b508eca6f25f7cf18444"],["images/StPats3.jpg","9b3c75dfe7c8a1d24ffa4448dfd546f7"],["images/bible.svg","01e64055011207916b84a5bbfefdd11b"],["images/bishop-bio.png","76f60a9c26f4bbaf7e2c9eaee871ddb0"],["images/church.svg","604d0606ee6c04a5ee8d71bf0f62559b"],["images/diocese.svg","b6f4d0dbd6561950c1c731507519b62c"],["images/dpc.svg","1409a5660df1054c2da848c665222e1f"],["images/edu.svg","52325ac117b3230faa03a1aa62d01229"],["images/events.svg","e06d18c9b0cce78e5fe4187d5cf1b369"],["images/give.svg","a7932306570fb1506e7dd38e4e729860"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/header.jpg","255f37703c1fc6fa4bf25d2fe95b2698"],["images/icons/icons-hinted.ttf","d41d8cd98f00b204e9800998ecf8427e"],["images/icons/icons.eot","742c4affdabd597249ab4d8f32ceb5d9"],["images/icons/icons.svg","46661d6d65debc63884004fed6e37e5c"],["images/icons/icons.ttf","43ac9104d6fac184272ba3784167577d"],["images/icons/icons.woff","e470c7159d62bbeedf51a7d98e65ca4d"],["images/icons/icons.woff2","1a75a1500dc4614b85523f4183cdeef7"],["images/icons/placeholder--medium.png","baa033665c8a070a9e5a66c2bd8b0474"],["images/icons/placeholder--small.png","d5efa06871740522ebb8ae5da95b7737"],["images/icons/placeholder--wide.png","0f9f6ff52eac6a13ab562341c6e329d1"],["images/news.svg","48810b778179501e2aaaa46c4a735595"],["images/noodles.jpg","4b6e3560035393065caf3a7cdfbf3821"],["images/parish.svg","5b8c6f460c1ba205059b8c413cc4d4ce"],["images/school.svg","949bd3810d1f0447e83b706cc16b1356"],["images/shield-stripped.svg","c2fe4ed7713f30f344fe7ad7ddde803b"],["images/shield.png","3101a3069ede64b055adac77c6aeb410"],["images/shield.svg","458a1c0f0621a126f8297c38f0fbd914"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","7b25726dc13117ef582377888bed4de9"],["manifest.json","d83aafba187e449abd4960bcc45b2fe6"],["scripts/classList.js","8550093402c125456759d206060df373"],["scripts/houdini.js","4938c1223718f30c8551cf3d3243c09a"],["scripts/main.js","222cb4e83517d17b92d4189a8e3050b0"],["styleguide.html","0d59a75b92aa0376725295b238e291bf"],["styles/components/components.css","b37ddeb28a181e96a16e3d20309d6ed3"],["styles/main.css","45d154e5f7663041479c485e962b28ac"],["styles/styles/style.css","d738a90d34fc92d0f6f305c0279b4e2d"]];
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

