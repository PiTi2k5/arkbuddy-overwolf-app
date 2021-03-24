function renderTekGenApp() {
  appName.innerText = 'Tek Generator Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card clear no-padding">
  <div class="input-box half">
  <label for="elementTG">Element Amount</label>
  <input placeholder="0" id="elementTG" type="number" onKeyUp="tekGenData()" onChange="tekGenData()">
  </div>
  <div class="input-box half right-side">
  <label for="elementShardTG">Shard Amount</label>
  <input placeholder="0" id="elementShardTG" type="number" onKeyUp="tekGenData()" onChange="tekGenData()">
  </div>
  <div class="input-box">
  <label for="radiusTG">Radius</label>
  <input placeholder="0" id="radiusTG" type="number" onKeyUp="tekGenData()" onChange="tekGenData()">
  </div>
  </div>
  
  <div id="fuelTable" class="basic-card clear no-padding fuel-card">
<div class="full-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time until empty</span></h3>
  </div>
 
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumtion"></span></span>
  </div>
  
  </div>
  `;
  tekGenData()
}

function tekGenData() {
  var elementAmount = document.getElementById('elementTG').valueAsNumber || 0;
  var shardAmount = document.getElementById('elementShardTG').valueAsNumber || 0;
  var radius = document.getElementById('radiusTG').valueAsNumber || 1;
  var shardsConverted = Math.abs(shardAmount / 100);
  var elementTotal = Math.abs(elementAmount) + Math.abs(shardsConverted);
  var base = Math.abs(1+((radius - 1)* 0.33));
  var hourly = Math.abs(18 / base)
  var willLast = Math.abs((elementTotal) * hourly) * fuelConsumptionRate;
  var secondsTotal = Math.abs(willLast * 3600);
  var days = Math.floor(secondsTotal / (3600*24))
  var hours = parseInt(secondsTotal / 3600) % 24;
  var minutes = parseInt((secondsTotal % 3600) / 60);
  var seconds = parseInt(secondsTotal % 60);
  fuelConsumtion.innerText = fuelConsumptionRate;
  time.innerText = `${numFill(days)}:${numFill(hours)}:${numFill(minutes)}:${numFill(seconds)}`;
  //time.innerText = `${days}:${hours}:${minutes}:${seconds}`
    if(radius) {
    fuelTable.style.opacity = "1";
  }
  console.log(`${shardsConverted} shards - ${elementTotal} total element`)
}