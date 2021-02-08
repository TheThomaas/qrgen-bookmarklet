javascript: (function () {
    let qrGenURL = "https://qrgen.cc/";
    let finalURL = qrGenURL.concat(window.location.href);
    window.open(finalURL);
})();