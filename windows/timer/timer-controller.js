define([
    '../../windows/in-game/in-game-view.js',
    '../../scripts/services/hotkeys-service.js'
  ], function (
    timerView,
    HotkeysService
    ) {
  
    class timerController {
  
      constructor() {
        this.timerView = new timerView();
  
        // this._gameEventHandler = this._gameEventHandler.bind(this);
        // this._infoUpdateHandler = this._infoUpdateHandler.bind(this);
        // this._eventListener = this._eventListener.bind(this);
        this._updateHotkey = this._updateHotkey.bind(this);
      }
  
      run() {
        // listen to events from the event bus from the main window,
        // the callback will be run in the context of the current window
        let mainWindow = overwolf.windows.getMainWindow();
       // mainWindow.ow_eventBus.addListener(this._eventListener);
  
        // Update hotkey view and listen to changes:
        this._updateHotkey();
        HotkeysService.addHotkeyChangeListener(this._updateHotkey);
      }
  
      async _updateHotkey() {
        const hotkey = await HotkeysService.getToggleHotkey();
        this.timerView.updateHotkey(hotkey);
      }
  
      _eventListener(eventName, data) {
        switch (eventName) {
          case 'event': {
            this._gameEventHandler(data);
            break;
          }
          case 'info': {
            this._infoUpdateHandler(data);
            break;
          }
        }
      }
  

      _infoUpdateHandler(infoUpdate) {
        this.timerView.logInfoUpdate(JSON.stringify(infoUpdate), false);
      }
    }
  
  
    return timerController;
  });
  