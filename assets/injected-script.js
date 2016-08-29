// Abort if the page doesn"t send any messages for a while.
//
;(function () {
  window.setTimeout(function collectAllScriptTagsFn() {
    var files = [],
    scripts = document.querySelectorAll("script"),
    i, len, file,
    historyFiles = [],
    history = Ext.Loader.history;
    for (i = 0, len = scripts.length; i < len; i++) {
      file = scripts[i].src.split("?");
      files.push(file[0]);
    }
    for (i = 0, len = history.length; i < len; i++) {
      historyFiles.push(Ext.Loader.getPath(history[i]));
    }
    sendMessage("mytask.done", {
      scriptTags: files,
      history: historyFiles
    });
  }, window.SENCHA_DEPENDENCIES_TIMEOUT || 5000);
})()
