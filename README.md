pbwatcher
=========

Notify of clipboard change (OSX only)

# npm

```shell
npm install pbwatcher
```

# usage

```javascript
'use strict';

var PbWatcher = require('pbwatcher');

var watchIntervalMs = 250;

PbWatcher(function(data){
  console.log('Clipboard changed to : "%s"', data);
}, watchIntervalMs);
```
