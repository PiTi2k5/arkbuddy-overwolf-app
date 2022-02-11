function renderForcefieldApp() {
  appName.innerText = 'Forcefield Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card border-radius med-padding ">
  <div class="input-box half">
  <label for="elementFF">Element Amount</label>
  <input placeholder="0" id="elementFF" type="number" onKeyUp="forcefieldData()" onChange="forcefieldData()">
  </div>
  <div class="input-box half right-side">
  <label for="elementShardFF">Shard Amount</label>
  <input placeholder="0" id="elementShardFF" type="number" onKeyUp="forcefieldData()" onChange="forcefieldData()">
  </div>
  <div class="input-box">
  <label for="radiusFF">Radius</label>
  <input placeholder="0" id="radiusFF" type="number" onKeyUp="forcefieldData()" onChange="forcefieldData()">
  </div>
  </div>
  
  <div id="fuelTable" class="basic-card border-radius med-padding fuel-card">
<div class="full-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time until empty</span></h3>
  </div>
  
  </div>

  <div class="full-tile">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span></span>
  </div>
  `;
  forcefieldData();
}

function forcefieldData() {
  var elementAmount = document.getElementById('elementFF').valueAsNumber || 0;
  var shardAmount = document.getElementById('elementShardFF').valueAsNumber || 0;
  var radius = document.getElementById('radiusFF').valueAsNumber || 1;
  
  var shardsConverted = Math.abs(shardAmount / 100);
  var elementTotal = Math.abs(elementAmount) + Math.abs(shardsConverted);
  
  var elementCost = Math.abs(radius * 60);
  var willLast = Math.abs((elementTotal) / radius)
  
  var secondsTotal = Math.abs(willLast * 3600);
  fuelConsumption.innerText = fuelConsumptionRate;
  time.innerText = convertTime(secondsTotal); 
    fuelTable.style.opacity = "1";
}