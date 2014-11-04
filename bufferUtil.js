/*jslint bitwise: true, node: true */
/*globals ArrayBuffer,Uint8Array,DataView */

exports.and = function (a, b) {
  'use strict';
  var out = new Uint8Array(a.byteLength),
    i,
    a_byte_view = new Uint8Array(a),
    b_byte_view = new Uint8Array(b);
  for (i = 0; i < a.byteLength; i += 1) {
    out[i] = a_byte_view[i] & b_byte_view[i];
  }
  return out.buffer;
};

exports.or = function (a, b) {
  'use strict';
  var out = new Uint8Array(a.byteLength),
    i,
    a_byte_view = new Uint8Array(a),
    b_byte_view = new Uint8Array(b);
  for (i = 0; i < a.byteLength; i += 1) {
    out[i] = a_byte_view[i] | b_byte_view[i];
  }
  return out.buffer;
};

exports.not = function (a) {
  'use strict';
  var out = new Uint8Array(a.byteLength),
    i,
    a_byte_view = new Uint8Array(a);
  for (i = 0; i < a.byteLength; i += 1) {
    out[i] = ~a_byte_view[i];
  }
  return out.buffer;
};