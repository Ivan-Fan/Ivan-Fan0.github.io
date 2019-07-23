/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2018/07/22/记下美好的瞬间（一）-Ivan-s-blog-诞生/index.html","d2be29dba8f834b71f9bb6b9b106886b"],["D:/blog/public/2018/07/25/用hexo-GitHub搭建个人博客指南/index.html","9fbfe7bda59e2df2125aabbbeca5c138"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/index.html","aca115bc03fbcd03549dc5d539b2c306"],["D:/blog/public/2018/08/15/吴恩达deeplearning学习笔记（一）-logistic回归/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/2018/08/18/托福写作-独立写作模板/index.html","7b58d7b971611192de007148a0590051"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/index.html","d87ee29655e6c62b0d69fd537c811984"],["D:/blog/public/2018/08/18/托福写作-独立写作要点须知-模板/绝对词类文章结构.png","cdc093ecb762eff786ed688e41458547"],["D:/blog/public/2018/08/18/托福口语-Task1语料仓库/index.html","c379f574a63632e16ad1e52928ef03e5"],["D:/blog/public/2018/08/20/Markdown语法tips/1.png","5bcd224a0a252b78b54ebc9a6a0058a8"],["D:/blog/public/2018/08/20/Markdown语法tips/2.png","463ff2c9409d43d82e0070449425027b"],["D:/blog/public/2018/08/20/Markdown语法tips/3.png","35eeae7bee34db339aa4cd09eb87fd04"],["D:/blog/public/2018/08/20/Markdown语法tips/index.html","23bfa512dc167c3b07f749e78120a4db"],["D:/blog/public/2018/08/20/Markdown语法tips/u.jpg","c6c2993dbe6957e423148a70ff377775"],["D:/blog/public/2018/08/23/托福写作-综合写作模板/index.html","def89dd70144d5ba51774878b4f07ea9"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/index.html","0d9e9fee631ff0c36c4401feed37cb93"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/introduction.png","1eb2eb6702977d05022e157f6c052fe7"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/problem.png","b6caf3da23119d85a8a460bfb8523afc"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/task3.png","414fe360fa7113538abaf0a7061357cd"],["D:/blog/public/2018/08/23/托福口语-Task3-5模板/title.png","f19c4f7817adee5c044b73fca0958524"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/Keras.png","b832584bae9d420c907d91456606d410"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/flatten.png","d3da568ebe70e04608818c8aa9962ef7"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/index.html","b4034cfd5c6ea48e208ba745ba599e5b"],["D:/blog/public/2018/08/27/李宏毅MachineLearning学习笔记-CNN/parameter.png","082984d69218a881d2226f396cce8095"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/20140417103434-649593752.jpg","db3919bd23c8f1d39305aeffc04304cd"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/index.html","97fd772c8d263672dc04b3904bf8703c"],["D:/blog/public/2018/10/10/光影流年-时空恋旅人/u=3016089955,73941064&fm=214&gp=0.jpg","6c688a9c18b1c78827dd368e7ec786b3"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/edf6b52706fd7670693ba0238a6e51c11255de20.jpg","c94f5fea2fa52160014c153c50c841ba"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/index.html","6af865c2aa8c961358016cf10cea08d0"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/半星.png","aece5b4f53ebf4a3d9530d18eedf31c0"],["D:/blog/public/2018/10/13/光影流年-触不可及-Intouchables/实五角星.png","e83a355a7a955aee7d36574141a1dfe6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/1.png","9286a485a9add719d526955788f742ec"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.jpg","57a8f2b3946d9ed6378612ce5404ee20"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/10.png","f1deac0f096a1a5b0d3401a80a1798b5"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.jpg","595db9dabadf299aa30e08946882deed"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/11.png","14ed7dc8dc6804651deabfb9be4ecfbd"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/12.png","eb66b469c90c83405db0f5e3812be7ad"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.jpg","2540bda15729d37421ba0f1b88bb88e6"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/13.png","7bd22e3c502c5c87cd830c52d03282a8"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.jpg","852597ec1ecffd0183ec4a223b8b7d2a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/14.png","9d5f09b9000a03394f216fd604b40b09"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/15.png","e6ac7800da6aec9d65812ef66e0840d1"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/2.png","e589cf4a63f8af32cacd463bf1872a40"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/3.jpg","dffe34e5e83ef4154b6a7dd6948540ab"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/4.jpg","ec5d1ba2cc8ceb7333a0c42b8e3bedcc"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/5.png","94bca6d5eb4461ce3347478a6ff7f139"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/6.png","6cc068418fde938ffd21e0102fbd4f13"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/7.png","e8060c713e35461368cbda574195af33"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/8.png","c6d4c27edbdaf8779b828cb4538fd33a"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/9.png","50d251fc43e2f1e5e6682f1ddf5ba81b"],["D:/blog/public/2018/10/25/安装TensorFlow躺坑总结/index.html","067fa03e62fae28b70770a167b602860"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/1.jpg","8bc3293631c83d08e3b4bf5fae49fd0e"],["D:/blog/public/2018/10/26/光影流年-天堂电影院/index.html","4f9e52814f8be4e8fbba5dcce9f7df28"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/1.gif","eb81e1072a6c03b78a8f7c76432c685f"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/index.html","c0fa9a4e0de46706b80ee4fd70935e5d"],["D:/blog/public/2018/10/29/光影流年-伯德小姐/lady bird.jpg","251620d9a523181e801e2c8bb30a6510"],["D:/blog/public/2018/10/31/Python常用语法总结/1.png","a77a6adff111ca177ab92ce4df6b40ed"],["D:/blog/public/2018/10/31/Python常用语法总结/2.png","92fe21e0794f1af6d5b69be0b05af504"],["D:/blog/public/2018/10/31/Python常用语法总结/3.png","fc9acd71cba163dd0083f08c29bc6cdb"],["D:/blog/public/2018/10/31/Python常用语法总结/index.html","21eee5db9780e752f3fc8cd3f0ddb4d1"],["D:/blog/public/2018/11/09/光影流年-我是传奇/index.html","3454cc962993f088d662d9497bdf8d38"],["D:/blog/public/2018/11/09/光影流年-我是传奇/我是传奇.jpg","0fbb8dbf9f0abaec74feded56b1e10c4"],["D:/blog/public/2019/07/23/你好，世界/index.html","cc94cefc652df2694e580aac81e855e4"],["D:/blog/public/2019/07/23/托福口语-Task2语料仓库/index.html","0277c7ce6e399df49bc5ce2d5b286a97"],["D:/blog/public/about/index.html","c41dd4d3d551104afa3e481ec9106996"],["D:/blog/public/archives/2018/07/index.html","df9d4bcb79cf9121cb78f23f84090d1e"],["D:/blog/public/archives/2018/08/index.html","f4524324cbe3f3f442e75ecc1271ae96"],["D:/blog/public/archives/2018/10/index.html","9d82c0743581d1af48174f9568dd5e31"],["D:/blog/public/archives/2018/11/index.html","45082b658d2ae259d21fcb180c193d8e"],["D:/blog/public/archives/2018/index.html","1f45dae6b6b9719145e427396c86f6dc"],["D:/blog/public/archives/2018/page/2/index.html","7cbbb48cb66d527b93b55128d68dad75"],["D:/blog/public/archives/2019/07/index.html","87d0c5f1bdfd9a7fe897dd269f469b84"],["D:/blog/public/archives/2019/index.html","9c0785e386ba609a2c41a9bfb8fb8a88"],["D:/blog/public/archives/index.html","b533cb5ac0c6bfe8c9240b1c4525cde0"],["D:/blog/public/archives/page/2/index.html","6cea8d7b64d590f34063ccd06459590c"],["D:/blog/public/categories/TOEFL/Speaking/index.html","2d36080cb7fd712d3d4304a52fdb7ac7"],["D:/blog/public/categories/TOEFL/Writing/index.html","152c71ccaa8c10f620fb8d1079ea1a00"],["D:/blog/public/categories/TOEFL/index.html","33c8b100060997b6d15fe3450e41a382"],["D:/blog/public/categories/index.html","f0bf654e731dc1765f2a4d5279441b37"],["D:/blog/public/categories/wonderful/index.html","84e56ed1cfe862a3c87e01b9141617de"],["D:/blog/public/categories/光影流年/index.html","32693552a4652f7511cbdddf8f501b15"],["D:/blog/public/categories/光影流年/人生/index.html","2ad73fa85ae5f66bbd7e667b95ceb53c"],["D:/blog/public/categories/光影流年/友谊/index.html","ed5b7cd53111db742e502a3cc684e89a"],["D:/blog/public/categories/光影流年/科幻/index.html","0d3087b56d2e836887fc24358a7c1768"],["D:/blog/public/categories/光影流年/青春/index.html","5e3f2f7a0728a9eda8d99211ff5687ba"],["D:/blog/public/categories/机器学习/index.html","12ad8985b6d6929962944248a37c0fa4"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/01-神经网络和深度学习/index.html","1326999d9b4db37c3ae8bc21f3ea35ef"],["D:/blog/public/categories/机器学习/吴恩达DeepLearning/index.html","ef843683cfdf8769326ef22ae4498584"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/CNN-卷积神经网络/index.html","9d342aae9bf642fb0378cb925730f1a5"],["D:/blog/public/categories/机器学习/李宏毅MachineLearning/index.html","b592169c7850b221a81e36731d71f184"],["D:/blog/public/categories/经验/Markdown写作/index.html","26166f7ba1201efaa92270ee01ae136f"],["D:/blog/public/categories/经验/Python/index.html","e2150b25d462659cef234cd466cb43bc"],["D:/blog/public/categories/经验/index.html","e8ffa0573c34a0193fc5ed709807ffbe"],["D:/blog/public/categories/经验/搭建博客/index.html","e721b778e6409e983f6b1e24c39b32b2"],["D:/blog/public/categories/经验/深度学习/index.html","86cde643c525e3fa0177debeb9f0dc0a"],["D:/blog/public/css/index.css","ec8d13b9e4baeaeb589a5e6d9d57ef49"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/blog/public/img/donate1.png","b1873c1bbb3d1b8cbbfec92a82784025"],["D:/blog/public/img/donate2.png","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/favicon.png","6bf43c093c45a6ef2566d4d1483b9902"],["D:/blog/public/img/header.jpg","da059a2e426ae087955e0f1d066d7e9a"],["D:/blog/public/img/placeholder.png","0b6b775afff27df04828aafd0bc794b1"],["D:/blog/public/img/sigmoid函数.png","01b0908cc198776965606475213c66a8"],["D:/blog/public/img/yk.jpg","9d46b69538ba3fff50f4f403e89ca9c0"],["D:/blog/public/index.html","f2ffe683208e46f419af594aaef76903"],["D:/blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/blog/public/page/2/index.html","ca1aecce67c891ce8acf64d31e31fb84"],["D:/blog/public/tags/Movie/index.html","cdba5ea8b6aec19cbf80e5d86b59fbb4"],["D:/blog/public/tags/TOEFL/index.html","0a9a4056b38899f88f13bf37abe9aef5"],["D:/blog/public/tags/index-1.html","9dfa65289725f9ca20cfb59453030ac9"],["D:/blog/public/tags/index.html","51e9d04396dcf684656edd39e1c73ad3"],["D:/blog/public/tags/wonderful/index.html","c624465f254bda2c09436f15c5794a60"],["D:/blog/public/tags/亲情/index.html","7864c86e981caf9c61289839ec6cc247"],["D:/blog/public/tags/人生/index.html","caff9d5832e8c81db54a6f9412881169"],["D:/blog/public/tags/友谊/index.html","75a5fefbef314f5ab60a12e9bc3b951e"],["D:/blog/public/tags/惊悚/index.html","04f9258150ab74d5ba8ee978955adb07"],["D:/blog/public/tags/机器学习/index.html","4d4127e956d8cb8735f5bc7a5b307e99"],["D:/blog/public/tags/爱情/index.html","41a7a3212ff752bd9b18a5f9e76f2278"],["D:/blog/public/tags/科幻/index.html","11937c11e4a1d79a665ac636df9d673f"],["D:/blog/public/tags/经验指南/index.html","bcaf0131ec2d3a9da3586acdf7536e25"],["D:/blog/public/tags/青春/index.html","df116aa5bef74235c630285afab58b58"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







