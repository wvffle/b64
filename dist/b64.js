(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.b64 = {})));
}(this, (function (exports) { 'use strict';

  function encode (str) {
    return btoa(str)
  }

  function decode (str) {
    return atob(str)
  }

  exports.encode = encode;
  exports.decode = decode;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
