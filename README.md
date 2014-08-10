clipboard-watcher
=========

Notify of clipboard change (OSX only)

# npm

```shell
npm install clipboard-watcher
```

# usage

```javascript
'use strict';

var PbWatcher = require('clipboard-watcher');

var watchIntervalMs = 250;

PbWatcher(function(data){
  console.log('Clipboard changed to : "%s"', data);
}, watchIntervalMs);
```
