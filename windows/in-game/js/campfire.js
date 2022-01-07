function renderCampfireApp() {
	appName.innerText = ' Campfire Calculator';
	appView.innerHTML = ``;
	appView.innerHTML = `
  <div class="basic-card">
  <div class="input-box half">
  <label for="meatAmountCF">Meat Amount</label>
  <input placeholder="0" id="meatAmountCF" type="number" onKeyUp="campfireData()" onChange="campfireData()">
  </div>
  
  <div class="input-box half right-side">
  <label for="meatAmountCF">Campfire Amount</label>
  <input placeholder="0" id="campfireAmountCF" type="number" onKeyUp="campfireData()" onChange="campfireData()">
  </div>

  </div>
  
  <div id="fuelTable" class="basic-card fuel-card">
  
  <div class="half-tile">
  <h3><span class="block large-text" id="meatPer"></span>
  <span class="light">Meat per campfire</span></h3>
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
  <div class="data-header-title text-right">Per Campfire</div>
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
</div>


</div>


</div>

</div>
  
  <div class="full-tile">
  <span class="setting-notice lighter mini">Fuel consumption rate is set to <span class="light" id="fuelConsumption"></span></span>
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
	time.innerText = convertTime(secondsTotal); 
  fuelConsumption.innerText = fuelConsumptionRate;
	fuelTable.style.opacity = "1";
}