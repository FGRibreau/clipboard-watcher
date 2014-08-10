clipboard-watcher
=========

Notify of clipboard change (OSX only)

# Npm

```shell
npm install clipboard-watcher
```

# Usage

```javascript
'use strict';

var PbWatcher = require('clipboard-watcher');

var watchIntervalMs = 250;

PbWatcher(function(data){
  console.log('Clipboard changed to : "%s"', data);
}, watchIntervalMs);
```

# Thanks

Clipboard-watcher was deeply inspired by [SheetJS/pb](https://github.com/SheetJS/pb).
