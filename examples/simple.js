'use strict';

var PbWatcher = require('../');

var watchIntervalMs = 250;

PbWatcher(function(data){
  console.log('Clipboard changed to : "%s"', data);
}, watchIntervalMs);
