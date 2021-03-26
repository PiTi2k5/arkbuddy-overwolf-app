const appView = document.getElementById('app');
const appName = document.getElementById('appName');
var fuelConsumptionRate = localStorage.getItem('fuelConsumptionRate') || 1;
var craftingSpeedPercent = localStorage.getItem('craftingSpeedPercent') || 100;
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

//   Resource Calculator Render Card
// <div class="app-card" onclick="renderResourceCalculatorApp()">
//   <div>
//   <img class="app-icon" src="https://res.cloudinary.com/tristangregory/image/upload/v1614467631/ark/items/tameRouletteIcon.png">
//   <span class="app-name">Resource Calculator</span>
//   </div>
//   </div>

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

  </div>
  `;
  
  fuelConsumpt.value = localStorage.getItem('fuelConsumptionRate') || 1;
  craftSpeed.value = localStorage.getItem('craftingSpeedPercent') || 100;
}
function updateSettings() {
  localStorage.setItem('fuelConsumptionRate', fuelConsumpt.value)
  localStorage.setItem('craftingSpeedPercent', craftSpeed.value)
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
  console.log(email, textArea)
  fetch('https://arkbuddy.app/ow/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      userFeedback: textArea
    })
  })  
  appView.innerHTML = `
  <div class="basic-card">
  <span class="large-text">Thanks for the feedback!</span>
  </div>
  `;
  return false;
}
















newHotkey = {
  name: 'Show/Hide Tame App',
  virtualKey: 75,
  modifiers: {
    ctrl: true //shift
  }
};
function setHK() {
  overwolf.settings.hotkeys.assign(newHotkey, console.log)
}
