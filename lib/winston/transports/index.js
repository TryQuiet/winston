/**
 * transports.js: Set of all transports Winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

/**
 * TODO: add property description.
 * @type {Console}
 */
Object.defineProperty(exports, 'Console', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./console');
  }
});

/**
 * TODO: add property description.
 * @type {Stream}
 */
Object.defineProperty(exports, 'Stream', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./stream');
  }
});
