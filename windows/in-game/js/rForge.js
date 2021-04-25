function renderForgeApp() {
  appName.innerText = 'Refining Forge Calculator';
  appSubTitle.innerText = `Evenly distribute metal/fuel across all your forges`;
  appView.innerHTML = ` `;
  appView.innerHTML = `
  <div class="basic-card">
  <div class="input-box half">
  <label for="metalAmountRF">Metal Amount</label>
  <input placeholder="0" id="metalAmountRF" type="number" onKeyUp="forgeData()" onChange="forgeData()" onfocusout="oddCheck()">
  </div>
  <div class="input-box half">
  <label for="forgeAmountRF">Forge Amount</label>
  <input placeholder="0" id="forgeAmountRF" type="number" onKeyUp="forgeData()" onChange="forgeData()">
  </div>
  </div>
  
  <div id="fuelTable">
  <div class="basic-card fuel-card">
  <div class="half-tile">
  <h3><span class="block large-text odometer" id="perForge"></span>
  <span class="light">Metal Per Forge</span></h3>
  </div>
<div class="half-tile">
  <h3><span class="block large-text " id="time"></span>
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
<div class="data-line-title inline-img"><img align="middle" src="https://res.cloudinary.com/tristangregory/image/upload/t_50x50icon/ark/items/thatch.png"> Thatch</div>
<div class="data-line-title text-right"><span id="thatchAmt"></span></div>
<div class="data-line-title text-right"><span id="thatchTot"></span></div>
</div>
<div class="data-line">
<div class="data-line-title inline-img"><img align="middle" src="https://res.cloudinary.com/tristangregory/image/upload/t_50x50icon/ark/items/wood.png"> Wood</div>
<div class="data-line-title text-right"><span id="woodAmt"></span></div>
<div class="data-line-title text-right"><span id="woodTot"></span></div>
</div>
<div class="data-line">
<div class="data-line-title inline-img"><img align="middle" src="https://res.cloudinary.com/tristangregory/image/upload/t_50x50icon/ark/items/sparkpowder.png"> Sparkpowder</div>
<div class="data-line-title text-right"><span id="sparkPowderAmt"></span></div>
<div class="data-line-title text-right"><span id="sparkPowderTot"></span></div>
</div>
<div class="data-line">
<div class="data-line-title inline-img"><img align="middle" src="https://res.cloudinary.com/tristangregory/image/upload/t_50x50icon/ark/items/angler_gel.png"> Angler Gel</div>
<div class="data-line-title text-right"><span id="gelAmt"></span></div>
<div class="data-line-title text-right"><span id="gelTot"></span></div>
</div>
</div>


</div>


  </div>

  </div>

  <div class="full-tile">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span></span>
  </div>

  `;
  forgeData()
}
function oddCheck() {
  var metalInput = document.getElementById('metalAmountRF');
  var forgeInput = document.getElementById('forgeAmountRF');
  
  var metalAmount = document.getElementById('metalAmountRF').valueAsNumber;
  var forgeAmount = document.getElementById('forgeAmountRF').valueAsNumber;
  if(metalAmount%2 == 1) {metalAmount--;metalInput.value = metalAmount;}
  forgeData()
}

function forgeData() {
  var fuelTable = document.getElementById('fuelTable');
  var metalInput = document.getElementById('metalAmountRF');
  var forgeInput = document.getElementById('forgeAmountRF');
  
  var metalAmount = document.getElementById('metalAmountRF').valueAsNumber || 0;
  var forgeAmount = document.getElementById('forgeAmountRF').valueAsNumber || 1;

    var metalPerForge = parseInt(metalAmount/forgeAmount);
    var secondsTotal = parseInt((((((metalPerForge + 2) / 2) / 20) * 20) * 20) - 20) / fuelConsumptionRate;
    if(metalPerForge%2 == 1) {
      var newseconds = parseInt(secondsTotal-10);
      secondsTotal = newseconds;
    }
    
    var thatchAmount = Math.ceil(secondsTotal / 7.5);
    var thatchTotal = parseInt(thatchAmount * forgeAmount);
    var woodAmount = Math.ceil(secondsTotal / 30);
    var woodTotal = parseInt(woodAmount * forgeAmount);
    var sparkpowderAmount = Math.ceil(secondsTotal / 60);
    var sparkpowderTotal = parseInt(sparkpowderAmount * forgeAmount);
    var gelAmount = Math.ceil(secondsTotal / 240);
    var gelTotal = parseInt(gelAmount * forgeAmount);
    time.innerText = convertTime(secondsTotal); 
    perForge.innerText = metalPerForge.toLocaleString();
    thatchAmt.innerText = thatchAmount.toLocaleString();
    thatchTot.innerText = thatchTotal.toLocaleString();
    woodAmt.innerText = woodAmount.toLocaleString();
    woodTot.innerText = woodTotal.toLocaleString();
    sparkPowderAmt.innerText = sparkpowderAmount.toLocaleString();
    sparkPowderTot.innerText = sparkpowderTotal.toLocaleString();
    gelAmt.innerText = gelAmount.toLocaleString();
    gelTot.innerText = gelTotal.toLocaleString();
    fuelTable.style.opacity = "1";
    fuelConsumption.innerText = fuelConsumptionRate;
    //console.log(`${hours}:${minutes}:${seconds}`)

}

{/* <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Thatch.png">
  <h3><span class="block large-text odometer" id="thatchAmt"></span>
  <span class="light"><span class="fuel-name">Thatch</span> per forge</span></h3>
  <span class="lighter mini" id="thatchTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Wood.png">
  <h3><span class="block large-text" id="woodAmt"></span>
  <span class="light"><span class="fuel-name">Wood</span> per forge</span></h3>
  <span class="lighter mini" id="woodTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Sparkpowder.png">
  <h3><span class="block large-text" id="sparkPowderAmt"></span>
  <span class="light"><span class="fuel-name">Sparkpowder</span> per forge</span></h3>
  <span class="lighter mini" id="sparkPowderTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/AnglerGel.png">
  <h3><span class="block large-text" id="gelAmt"></span>
  <span class="light"><span class="fuel-name">Angler Gel</span> per forge</span></h3>
  <span class="lighter mini" id="gelTot"></span>
  </div> */}