// var imported = document.createElement('script');
// imported.src = 'js/resourceCalcData.js';
// document.head.appendChild(imported);
///
function renderResourceCalculatorApp() {
  appName.innerText = 'Resource Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card border-radius med-padding">
  <label for="metalAmountRF">Search for item</label>
<input autocomplete="off" onkeyup="renderSearchResults()" type="search" class="input" placeholder="Search items" id="searchInput"></input>
<div id="itemSearch"></div>
</div>
  <div class="basic-card border-radius med-padding no-padding clear">
  <div class="tab">
  <button id="tab1" class="tablinks" onclick="changeTab('tab1', 'itemsList')">List</button>
  <button id="tab2" class="tablinks" onclick="changeTab('tab2', 'itemsListTotals')">Total</button>
</div>
    </div>
<div class="basic-card border-radius med-padding no-padding" id="resourceCard">
<div id="itemsList" class="tabcontent slide-in-left"></div>
<div id="itemsListTotals" class="tabcontent slide-in-right"></div>
  </div>
  `;
  
var itemsList = document.getElementById('itemsList');
var itemsListTotals = document.getElementById('itemsListTotals');
var itemSearch = document.getElementById('itemSearch');
var searchInput = document.getElementById('searchInput');
  getData()
  changeTab('tab1', 'itemsList');
}


