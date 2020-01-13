/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "632efceb86a5aeca5f8e34153aee5c93"
  },
  {
    "url": "assets/css/0.styles.5ff440df.css",
    "revision": "5bd0f9dbf6ad84c7c34d84ee0256ea06"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0f27532e.js",
    "revision": "0d604ece0439afe298b570901e7b3831"
  },
  {
    "url": "assets/js/2.fab84f1d.js",
    "revision": "021804a90074206b325c2ae32d53cb91"
  },
  {
    "url": "assets/js/3.5baa6c09.js",
    "revision": "aaa411e00f87d80ae771441436be8e45"
  },
  {
    "url": "assets/js/4.840ad376.js",
    "revision": "cb6af1f540ed700b91f33dd1af92c0bd"
  },
  {
    "url": "assets/js/app.d8e0f244.js",
    "revision": "50daf859c63bdceeb3deb714ccbe3eb7"
  },
  {
    "url": "index.html",
    "revision": "3c020ff4a9556e533fa1af1f742138f4"
  },
  {
    "url": "login-wap/zh-cn.html",
    "revision": "91b022f3d1de37e7c762f3ed37f87f7d"
  },
  {
    "url": "login-wechat/zh-cn.html",
    "revision": "ccce58f4e6fb32e0758f50f3907c9f1b"
  },
  {
    "url": "login/zh-cn.html",
    "revision": "515cc5fb6d934b9fc453384bcbf9e10c"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
