'use strict';

var $    = require('NodObjC');
$.framework('AppKit');
var pool = $.NSAutoreleasePool('alloc')('init');

/**
 * [exports description]
 * @param  {Function} f(type, data) listener
 * @return {[type]}
 */

module.exports = function(f, interval){
  var current;
  interval = interval || module.exports.DEFAULT_INTERVAL;

  function tick(){
    var data = getClipboard();

    if(data && data !== current){
      current = data;
      f(current);
    }

    setTimeout(tick, interval);
  }

  tick();
};

module.exports.DEFAULT_INTERVAL = 250;

/**
 * [getClipboard description]
 * @optional
 * @param  {String} type
 *
 * @return {String} clipboard data
 */
function getClipboard(type){
  var x  = $.NSPasteboard('generalPasteboard');
  var tt = mytype(type);
  var t  = tt[0];
  var o  = tt[1];
  return String(o === 's' ? x('stringForType', t) : '');
}

/**
 * [mytype description]
 * @param  {String} type
 * @optional
 * @return {[NS, String]}
 */
function mytype(type) {
  if(!type){
    return [$.NSStringPboardType, 's'];
  }

  type = type.toLowerCase();

  if(type === 'html'){
    return [$.NSHTMLPboardType, 's'];
  }

  if(type === 'png'){
    return [$.NSHTMLPboardType, 'i'];
  }

  if(type === 'text'){
    return [$.NSStringPboardType, 's'];
  }

  return [$[type], 's'];
}
