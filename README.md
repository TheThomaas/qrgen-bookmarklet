# qrgen-bookmarklet
This bookmarklet uses [QrGen](https://qrgen.cc/) to generate a QR code of the current page.

To use this bookmarklet, create a bookmark of the content of the file : [qrcode.js](https://raw.githubusercontent.com/TheThomaas/qrgen-bookmarklet/main/qrcode.js)
Or copy the code form here :
```javascript
javascript: (function () {let qrGenURL = "https://qrgen.cc/";let finalURL = qrGenURL.concat(window.location.href);window.open(finalURL);})();
```