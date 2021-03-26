function renderEGenApp() {
  appName.innerText = 'Electrical Generator Calculator';
  appSubTitle.innerText = 'See how long your electric generator will last.';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card ">
  <div class="input-box">
  <label for="gasAmount">Gas Amount</label>
  <input placeholder="0" id="gasAmount" type="number" onKeyUp="eGenData()" onChange="eGenData()">
  </div>
  </div>
  
  <div id="fuelTable" class="basic-card fuel-card">
  <div class="full-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time</span></h3>
  
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumtion"></span>
  </div>
  
  </div>
  
  </div>`;
  eGenData()
}

function eGenData() {
  var gasAmount = document.getElementById('gasAmount').valueAsNumber || 0;
  var base = Math.abs(gasAmount * 60)
  var willLast = Math.abs(base) * fuelConsumptionRate;
  
  var secondsTotal = Math.abs(willLast * 3600);
  var days = Math.floor(secondsTotal / (3600*24))
  var hours = parseInt(secondsTotal / 3600) % 24;
  var minutes = parseInt((secondsTotal % 3600) / 60);
  var seconds = parseInt(secondsTotal % 60);
  fuelConsumtion.innerText = fuelConsumptionRate;
  time.innerText = `${numFill(days)}:${numFill(hours)}:${numFill(minutes)}:${numFill(seconds)}`;
  fuelTable.style.opacity = "1";
  
}