const appView = document.getElementById('app');
const appName = document.getElementById('appName');
var fuelConsumptionRate = localStorage.getItem('fuelConsumptionRate') || 1;
var craftingSpeedPercent = localStorage.getItem('craftingSpeedPercent') || 100;
var babyMatureSpeedRate = localStorage.getItem('babyMatureSpeedRate') || 1;
var craftingSpeed = parseInt(craftingSpeedPercent / 100);
function reloadSettings() {
  fuelConsumptionRate = localStorage.getItem('fuelConsumptionRate') || 1;
  craftingSpeedPercent = localStorage.getItem('craftingSpeedPercent') || 100;
  craftingSpeed = parseInt(craftingSpeedPercent / 100);
}
function renderHomePage() {
  reloadSettings();
	appName.innerText = 'Home';
  appSubTitle.innerText = '';
	appView.innerHTML =  `<div class="app-list basic-card no-padding clear">

  <div class="app-card" onclick="renderResourceCalculatorApp()">
<div>
<img class="app-icon" src="https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/b/b9/Smithy.png/revision/latest/scale-to-width-down/128?cb=20150615134739">
<span class="app-name">Resource Calculator</span>
</div>
</div>


  <div class="app-card animate__fadeInLeft" onclick="renderForgeApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1603242081/ark/items80px/80px-Refining_Forge.png">
  <span class="app-name">Refining Forge</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderTekGenApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1603242081/ark/items80px/80px-Tek_Generator.png">
  <span class="app-name">Tek Generator</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderForcefieldApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1603242081/ark/items80px/80px-Tek_Forcefield.png">
  <span class="app-name">Tek Forcefield</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderiForgeApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1603242081/ark/items80px/80px-Industrial_Forge.png">
  <span class="app-name">Industrial Forge</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderEGenApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1587616361/ark/items/electrical_generator.png">
  <span class="app-name">Electrical Generator</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderCampfireApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1587616361/ark/items/campfire.png">
  <span class="app-name">Campfire</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderCustomRecipeApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1614385152/ark/items/custom_consumable.png">
  <span class="app-name">Custom Recipe Creator</span>
  </div>
  </div>
  
  <div class="app-card" onclick="renderTameRouletteApp()">
  <div>
  <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1614467631/ark/items/tameRouletteIcon.png">
  <span class="app-name">Tame Roulette</span>
  </div>
  </div>
  
  


  
  
  </div>

`;
}


renderHomePage();

function numFill(value) {
  return ('00' + value).slice(-2);
}
function renderSettingsPage() {
  appName.innerText = 'Settings';
  appSubTitle.innerText = 'Change the settings to make the app work with your server.';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card">
  <div class="input-box three-quarter no-padding">
  <label for="fuelConsumpt">Fuel Consumption Rate</label>
  <input id="fuelConsumpt" type="number" min="1" onChange="updateSettings()" onKeyUp="updateSettings()">
  </div>
  
  <div class="input-box three-quarter no-padding">
  <label for="craftSpeed">Crafting Speed %</label>
  <input id="craftSpeed" type="number" min="100" onChange="updateSettings()" onKeyUp="updateSettings()">
  </div>

  <div class="input-box three-quarter no-padding">
  <label for="babyMatureSpeed">Baby Mature Speed</label>
  <input id="babyMatureSpeed" type="number" min="1" onChange="updateSettings()" onKeyUp="updateSettings()">
  </div>

  <div class="input-box three-quarter no-padding hidden">
  <label>Crosshair</label>
    <btn onclick="openCrossHair()">Open</btn>
    <btn onclick="closeCrossHair()">Close</btn>
  </div>

  </div>

  <div class="basic-card clear">
  <div class="setting-notice full-tile" id="checkUpdateNotice"></div>
  <div id="loadingBar"></div>
  <btn onclick="checkForUpdate()" class="settings-button">Check for update</btn>
  <div class="full-tile margin-top">
  <span class="setting-notice lighter mini">arkbuddy version <span class="light" id="appVersionNumber"></span></span>
  </div>
  
  </div>
  `;
  getCurrentVersion()
  fuelConsumpt.value = localStorage.getItem('fuelConsumptionRate') || 1;
  craftSpeed.value = localStorage.getItem('craftingSpeedPercent') || 100;
  babyMatureSpeed.value = localStorage.getItem('babyMatureSpeedRate') || 1;
}
function updateSettings() {
  localStorage.setItem('fuelConsumptionRate', fuelConsumpt.value)
  localStorage.setItem('craftingSpeedPercent', craftSpeed.value)
  localStorage.setItem('babyMatureSpeedRate', babyMatureSpeed.value)
}

function renderFeedbackPage() {
  appName.innerText = 'Feedback';
  appSubTitle.innerText = 'Share your feedback, ideas, suggestions or whatever else!';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card">
  <div class="input-box">
  <input placeholder="Your email (Optional)" id="userEmail">
  </div>
  <div class="input-box">
  <textarea placeholder="Let us know what you think..." id="feedback"></textarea>
  </div>
  <div class="submit-btn" value="Submit" onclick="submitForm()">Submit</div>

  </div>
  `;
}

function submitForm() {
  var email = document.getElementById("userEmail").value;
  var textArea = document.getElementById("feedback").value;

  fetch('https://arkbuddy.app/ow/feedbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      app: "arkbuddy",
      userFeedback: textArea
    })
  })
  .catch(function() {
    console.log("Fail")
  })
  appView.innerHTML = `
  <div class="basic-card">
  <span class="large-text">Thanks for the feedback!</span>
  </div>
  `;
  return false;
}


function convertTime(seconds) {
  sec = Math.round(seconds);
  var days = Math.floor(sec / (3600*24));
  var hours = parseInt(sec / 3600) % 24;
  var minutes = parseInt((sec % 3600) / 60);
  var seconds = parseInt(sec % 60);
  if(sec==0){return `${String(seconds)}s`}
  if(days>0){return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`}

  if(days==0&&hours>0){return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`}
  if(hours==0&&minutes>0){return `${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`}
  if(minutes==0&&seconds>0){return `${String(seconds).padStart(2, '0')}s`}
	return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}






function getCurrentVersion() {
  overwolf.extensions.current.getManifest(manifest => {
    var appVersion = manifest.meta.version;
    console.log(appVersion)
    appVersionNumber.innerText = appVersion;
  });
}

function checkForUpdate() {
  loadingBar.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`
  overwolf.extensions.checkForExtensionUpdate(CheckForUpdateResult => {
    console.log(CheckForUpdateResult)
    if(CheckForUpdateResult.state=="UpToDate") {
      loadingBar.innerHTML = ``;
      checkUpdateNotice.innerText = "App is up to date"
    }
    if(CheckForUpdateResult.state=="UpdateAvailable") {
      checkUpdateNotice.innerHTML = `
      <span>Update available - Version ${CheckForUpdateResult.updateVersion}</span>
      <btn onclick="updateApp()" class="settings-button">Update</btn>
      `
      loadingBar.innerHTML = ``;
    }
    if(CheckForUpdateResult.state=="PendingRestart") {
      checkUpdateNotice.innerHTML = `
      Update available - Pending restart
      <span>Update available - Pending restart</span>
      <btn onclick="relaunchApp()" class="settings-button">Relaunch</btn>
      `
      loadingBar.innerHTML = ``;
    }
  });
}

function updateApp() {
  overwolf.extensions.updateExtension(results => {
    console.log(results)
    if(results.success=="true") {
      checkUpdateNotice.innerText = `${results.info}`;
    } 
    if(results.success=="false") {
      checkUpdateNotice.innerText = `${results.info}`;
    }
    
  });
}

function relaunchApp() {overwolf.extensions.relaunch()}




function obtainWindow(name) {
   return new Promise((resolve, reject) => {
     overwolf.windows.obtainDeclaredWindow(name, (response) => {
       if (response.status !== "success") {
         return reject(response);
       }
 
       resolve(response);
     });
   });
 }
 
 function restore(name) {
   return new Promise(async (resolve, reject) => {
     try {
       await obtainWindow(name);
       overwolf.windows.restore(name, (result) => {
         if (result.status === "success") {
           resolve(result);
         } else {
           reject(result);
         }
       });
     } catch (e) {
       reject(e);
     }
   });
 }

 async function openCrossHair() {
  try {
    const windowOpenedResult = await restore('crosshair') 
} catch (error) {
    console.log(error) //error
}
 }
 overwolf.settings.hotkeys.onPressed.addListener(event => {
   console.log(event.name)
  if(event.name=="crossHairToggle"){toggleCrosshair()}
  });

async function toggleCrosshair() {
  overwolf.windows.getWindowState('crosshair',state=>{
    console.log(state)
    if (state.window_state === "minimized" || state.window_state === "closed") {
      openCrossHair()
    } else if (state.window_state === "normal" || state.window_state === "maximized") {
      overwolf.windows.minimize('crosshair');
    }
  });

}


function renderLibraryPage() {
  appName.innerText = 'Library';
  appSubTitle.innerText = '';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card">


  </div>
  `;
}



