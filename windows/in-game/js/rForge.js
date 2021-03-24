function renderForgeApp() {
  appName.innerText = 'Refining Forge Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card clear no-padding">
  <div class="input-box half">
  <label for="metalAmountRF">Metal Amount</label>
  <input placeholder="0" id="metalAmountRF" type="number" onKeyUp="forgeData()" onfocusout="oddCheck()">
  </div>
  <div class="input-box half">
  <label for="forgeAmountRF">Forge Amount</label>
  <input placeholder="0" id="forgeAmountRF" type="number" onKeyUp="forgeData()">
  </div>
  </div>
  
  <div id="fuelTable" class="basic-card clear no-padding fuel-card">
  <div class="half-tile">
  <h3><span class="block large-text odometer" id="perForge"></span>
  <span class="light">Metal Per Forge</span></h3>
  </div>
<div class="half-tile">
  <h3><span class="block large-text odometer" id="time"></span>
  <span class="light">Time Until Complete</span></h3>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Thatch.png">
  <h3><span class="block large-text odometer" id="thatchAmt"></span>
  <span class="light">Thatch per forge</span></h3>
  <span class="lighter mini" id="thatchTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Wood.png">
  <h3><span class="block large-text" id="woodAmt"></span>
  <span class="light">Wood per forge</span></h3>
  <span class="lighter mini" id="woodTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Sparkpowder.png">
  <h3><span class="block large-text" id="sparkPowderAmt"></span>
  <span class="light">Sparkpowder per forge</span></h3>
  <span class="lighter mini" id="sparkPowderTot"></span>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/AnglerGel.png">
  <h3><span class="block large-text" id="gelAmt"></span>
  <span class="light">Angler Gel per forge</span></h3>
  <span class="lighter mini" id="gelTot"></span>
  </div>
  
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumtion"></span></span>
  </div>
  
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
    var hours = parseInt(secondsTotal / 3600);
    var minutes = parseInt((secondsTotal % 3600) / 60);
    var seconds = parseInt(secondsTotal % 60);
    var thatchAmount = Math.ceil(secondsTotal / 7.5);
    var thatchTotal = parseInt(thatchAmount * forgeAmount);
    var woodAmount = Math.ceil(secondsTotal / 30);
    var woodTotal = parseInt(woodAmount * forgeAmount);
    var sparkpowderAmount = Math.ceil(secondsTotal / 60);
    var sparkpowderTotal = parseInt(sparkpowderAmount * forgeAmount);
    var gelAmount = Math.ceil(secondsTotal / 240);
    var gelTotal = parseInt(gelAmount * forgeAmount);
    time.innerText = `${numFill(hours)}:${numFill(minutes)}:${numFill(seconds)}`; 
    perForge.innerText = metalPerForge.toLocaleString();
    thatchAmt.innerText = thatchAmount.toLocaleString();
    thatchTot.innerText = thatchTotal.toLocaleString() + " Total";
    woodAmt.innerText = woodAmount.toLocaleString();
    woodTot.innerText = woodTotal.toLocaleString() + " Total";
    sparkPowderAmt.innerText = sparkpowderAmount.toLocaleString();
    sparkPowderTot.innerText = sparkpowderTotal.toLocaleString() + " Total";
    gelAmt.innerText = gelAmount.toLocaleString();
    gelTot.innerText = gelTotal.toLocaleString() + " Total";
    fuelTable.style.opacity = "1";
    fuelConsumtion.innerText = fuelConsumptionRate;
    //console.log(`${hours}:${minutes}:${seconds}`)

}
