function renderiForgeApp() {
  appName.innerText = 'Industrial Forge Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card ">
  <div class="input-box half">
  <label for="metalAmountIF">Metal Amount</label>
  <input placeholder="0" id="metalAmountIF" type="number" onKeyUp="iforgeData()" onChange="iforgeData()">
  </div>

  <div class="input-box half">
  <label for="forgeAmountIF">Forge Amount</label>
  <input placeholder="0" id="forgeAmountIF" type="number" onKeyUp="iforgeData()" onChange="iforgeData()">
  </div>

  </div>
  
  <div id="fuelTable" class="basic-card fuel-card">
  <div class="half-tile">
  <h3><span class="block large-text" id="perForge"></span>
  <span class="light">Metal Per Forge</span></h3>
  </div>

<div class="half-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time until complete</span></h3>
  </div>
  </div>
  
  <div class="basic-card no-padding clear">

  <div class="data-table">
  <div class="data-header">
    <div class="data-header-title">Fuel</div>
    <div class="data-header-title text-right">Per Forge</div>
    <div class="data-header-title text-right">Total</div>
  </div>
<div class="data-line">
<div class="data-line-title inline-img"><img align="middle" src="https://res.cloudinary.com/tristangregory/image/upload/t_50x50icon/ark/items/gasoline.png"> Gas</div>
<div class="data-line-title text-right"><span id="gasPeriForge"></span></div>
<div class="data-line-title text-right"><span id="gasTot"></span></div>
</div>

</div>



  </div>

  <div class="full-tile">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span></span>
  </div>
  `;
  iforgeData()
}

function iforgeData() {
  var fuelTable = document.getElementById('fuelTable');
  var metalInput = document.getElementById('metalAmountIF');
  //var forgeInput = document.getElementById('forgeAmountIF');
  
  var metalAmount = document.getElementById('metalAmountIF').valueAsNumber || 0;
  var forgeAmount = document.getElementById('forgeAmountIF').valueAsNumber || 1;
  //var forgeAmount = document.getElementById('forgeAmountIF').valueAsNumber;

    var metalPerForge = parseInt(metalAmount / forgeAmount);
    var secondsTotal = parseInt(metalPerForge / 2 / 60 * 60) / fuelConsumptionRate;;
    var gasNeeded = Math.ceil(secondsTotal / 900);
    var gasPerForge = parseInt(gasNeeded * forgeAmount);
    
    time.innerText = convertTime(secondsTotal);  
    perForge.innerText = metalPerForge.toLocaleString();
    gasPeriForge.innerText = gasNeeded.toLocaleString();
    gasTot.innerText = gasPerForge.toLocaleString();

    fuelConsumption.innerText = fuelConsumptionRate;
    fuelTable.style.opacity = "1";
    //console.log(`${hours}:${minutes}:${seconds}`)
  
}
