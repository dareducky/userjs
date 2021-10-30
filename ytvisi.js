document.addEventListener('visibilitychange', function (e) { e.stopImmediatePropagation(); }, true);
 
Object.defineProperty(document, 'visibilityState', { get: function () { return "visible"; } });
