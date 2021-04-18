function renderiForgeApp() {
  appName.innerText = 'Industrial Forge Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card ">
  <div class="input-box">
  <label for="metalAmountIF">Metal Amount</label>
  <input placeholder="0" id="metalAmountIF" type="number" onKeyUp="iforgeData()" onChange="iforgeData()">
  </div>

  </div>
  
  <div id="fuelTable" class="basic-card fuel-card">
  <div class="half-tile">
  <h3><span class="block large-text" id="gasRequired"></span>
  <span class="light">Gas Required</span></h3>
  </div>
<div class="half-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time</span></h3>
  </div>
  
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span></span>
  </div>
  
  </div>
  `;
  iforgeData()
}

function iforgeData() {
  var fuelTable = document.getElementById('fuelTable');
  var metalInput = document.getElementById('metalAmountIF');
  //var forgeInput = document.getElementById('forgeAmountIF');
  
  var metalAmount = document.getElementById('metalAmountIF').valueAsNumber || 0;
  //var forgeAmount = document.getElementById('forgeAmountIF').valueAsNumber;

    var metalPerForge = parseInt(metalAmount);
    var secondsTotal = parseInt(metalPerForge / 2 / 60 * 60) / fuelConsumptionRate;;
    var gasNeeded = Math.ceil(secondsTotal / 900);
    
    var hours = parseInt(secondsTotal / 3600);
    var minutes = parseInt((secondsTotal % 3600) / 60);
    var seconds = parseInt(secondsTotal % 60);
    
    time.innerText = `${numFill(hours)}:${numFill(minutes)}:${numFill(seconds)}`; 
    
    gasRequired.innerText = gasNeeded;
    fuelConsumption.innerText = fuelConsumptionRate;
    fuelTable.style.opacity = "1";
    //console.log(`${hours}:${minutes}:${seconds}`)
  
}
