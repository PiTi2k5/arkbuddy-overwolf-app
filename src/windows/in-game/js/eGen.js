function renderEGenApp() {
  appName.innerText = 'Electrical Generator Calculator';
  appSubTitle.innerText = 'See how long your electric generator will last.';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card border-radius med-padding ">
  <div class="input-box">
  <label for="gasAmount">Gas Amount</label>
  <input placeholder="0" id="gasAmount" type="number" onKeyUp="eGenData()" onChange="eGenData()">
  </div>
  </div>
  
  <div id="fuelTable" class="basic-card border-radius med-padding fuel-card">
  <div class="full-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time until empty</span></h3>
  </div>
  </div>
  <div class="full-tile">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span>
  </div>
  </div>`;
  eGenData()
}

function eGenData() {
  var gasAmount = document.getElementById('gasAmount').valueAsNumber || 0;
  var base = Math.abs(gasAmount * 60)
  var willLast = Math.abs(base) * fuelConsumptionRate;
  
  var secondsTotal = Math.abs(willLast * 60);

  fuelConsumption.innerText = fuelConsumptionRate;
  time.innerText = convertTime(secondsTotal); 
  fuelTable.style.opacity = "1";
  
}