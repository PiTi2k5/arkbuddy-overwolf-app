define(["../ArkbuddyAppView.js"], function(ArkbuddyAppView) {
  class InGameView extends ArkbuddyAppView {
    constructor() {
      super();
      this._hotkey = document.getElementById("hotkey");
    }



    // Update hotkey header
    updateHotkey(hotkey) {
      this._hotkey.textContent = hotkey;
    }

  }

  return InGameView;
});
