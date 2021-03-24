function renderCampfireApp() {
	appName.innerText = 'Campfire Calculator';
	appView.innerHTML = ``;
	appView.innerHTML = `
  <div class="basic-card clear no-padding">
  <div class="input-box half">
  <label for="meatAmountCF">Meat Amount</label>
  <input placeholder="0" id="meatAmountCF" type="number" onKeyUp="campfireData()">
  </div>
  
  <div class="input-box half right-side">
  <label for="meatAmountCF">Campfire Amount</label>
  <input placeholder="0" id="campfireAmountCF" type="number" onKeyUp="campfireData()">
  </div>

  </div>
  
  <div id="fuelTable" class="basic-card clear no-padding fuel-card">
  
  <div class="half-tile">
  <h3><span class="block large-text" id="meatPer"></span>
  <span class="light">Meat per campfire</span></h3>
  </div>
  
  <div class="half-tile">
  <h3><span class="block large-text" id="time"></span>
  <span class="light">Time</span></h3>
  </div>
  
    <div class="quarter-tile">
  <img class="small-img" src="https://ik.imagekit.io/tristangames/ark/icons/40/Thatch.png">
  <h3><span class="block large-text" id="thatchAmt"></span>
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
  
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumtion"></span></span>
  </div>
  
  </div>
  `;
  campfireData()
}

function campfireData() {
	var fuelTable = document.getElementById('fuelTable');
	var meatAmount = document.getElementById('meatAmountCF').valueAsNumber || 0;
	var campfireAmount = document.getElementById('campfireAmountCF').valueAsNumber || 1;
	var meatPerCF = parseInt(meatAmount / campfireAmount);
	meatPer.innerText = meatPerCF;
	var secondsTotal = Math.abs(meatPerCF * 20);
	var hours = parseInt(secondsTotal / 3600);
	var minutes = parseInt((secondsTotal % 3600) / 60);
	var seconds = parseInt(secondsTotal % 60);
	var thatchAmount = Math.ceil(secondsTotal / 7.5);
	var thatchTotal = parseInt(thatchAmount * campfireAmount);
	var woodAmount = Math.ceil(secondsTotal / 30);
	var woodTotal = parseInt(woodAmount * campfireAmount);
	var sparkpowderAmount = Math.ceil(secondsTotal / 60);
	var sparkpowderTotal = parseInt(sparkpowderAmount * campfireAmount);
  thatchAmt.innerText = thatchAmount.toLocaleString();
  thatchTot.innerText = thatchTotal.toLocaleString() + " Total";
  woodAmt.innerText = woodAmount.toLocaleString();
  woodTot.innerText = woodTotal.toLocaleString() + " Total";
  sparkPowderAmt.innerText = sparkpowderAmount.toLocaleString();
  sparkPowderTot.innerText = sparkpowderTotal.toLocaleString() + " Total";
	time.innerText = `${numFill(hours)}:${numFill(minutes)}:${numFill(seconds)}`;
  fuelConsumtion.innerText = fuelConsumptionRate;
	fuelTable.style.opacity = "1";
}