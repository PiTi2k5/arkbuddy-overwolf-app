var imported = document.createElement('script');
imported.src = 'js/resourceCalculator.js';
document.head.appendChild(imported);
///
function renderResourceCalculatorApp() {
  appName.innerText = 'Resource Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card">
    <input onkeyup="searchItems()" autocomplete="off" onfocusin="openAllItems(); clearinput();" class="input" placeholder="Search items" id="searchInput"></input>
    </div>
<ul id="itemSearch"></ul>
<div class="basic-card no-padding">
  <div class="tab">
  <button id="tab1" class="tablinks" onclick="changeTab('tab1', 'itemsList')">Items</button>
  <button id="tab2" class="tablinks" onclick="changeTab('tab2', 'itemsListTotals')">Total</button>
</div>
<div id="itemsList" class="tabcontent"></div>
<div id="itemsListTotals" class="tabcontent"></div>
  </div>
  `;
  
var itemsList = document.getElementById('itemsList');
var itemsListTotals = document.getElementById('itemsListTotals');
var itemSearch = document.getElementById('itemSearch');
var searchInput = document.getElementById('searchInput');
  getData()
}


