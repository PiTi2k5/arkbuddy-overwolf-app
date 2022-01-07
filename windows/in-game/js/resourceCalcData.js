var items = [];
var userAddedItems = [];
var userAddedItemsTotal = [];
var favorites = localStorage.getItem("userFavorites");
if (!localStorage.getItem("userFavorites")) {
	localStorage.setItem("userFavorites", []);
}
var favItemsArray = [{
	name: "Bow",
	amt: "1"
}]
//localStorage.setItem("userFavorites", JSON.stringify(favItemsArray));
var maxSearchResults = 50;
function getData() {
	fetch('https://arkbuddy.app/data/newItemList.json').then(response => response.json()).then(data => {
		dataString = JSON.stringify(data);
		itemsJSON = JSON.parse(dataString)
	}).then((data) => {
		items = itemsJSON;
		startApp();
	})
}
getData();

function startApp() {
  
//   getURLParameters()
//   setTimeout(() => { loadingPage.classList.add("removed") }, 250);

}

function addItem(item, qty, edit) {
  //console.log(items[item])
	userAddedItemsTotal = [];
	var itemInfo = {
		name: item,
		qty: qty
	};
	userAddedItems.push(itemInfo)
	userAddedItemsAmt = userAddedItems.length;
	closeAllItems();
	render(item, qty, edit);
	renderTotal();
	//return `${item} added!`;
}

function editItem(itemId, newQty) {
	var itemAmtOrigInput = document.getElementById(`${itemId}og`);
	var itemAmtOrigAmt = itemAmtOrigInput.value;
	//console.log(itemAmtOrigAmt)
	if (newQty == itemAmtOrigAmt) {
		//return
	}
	if (newQty > itemAmtOrigAmt) {
		var finalQty = newQty;
		HighorLow = "higher"
	}
	if (newQty < itemAmtOrigAmt) {
		var finalQty = newQty;
		HighorLow = "lower"
	}
	userAddedItems[itemId].qty = finalQty;
	userAddedItemsTotal = [];
	render();
	renderTotal("edited", HighorLow, finalQty);
}

function render(item, qty, edit) {
	//userAddedItems.reverse();
	itemsList.innerHTML = "";
	userAddedItemsAmt = userAddedItems.length;
	t = 0;
	while (t < userAddedItemsAmt) {
		//console.log(userAddedItems[t])
		if (!items[userAddedItems[t].name].resources) {
			return
		}
		let $item = document.createElement('div');
		var creationAmount = userAddedItems[t].qty;
		$item.id = `${userAddedItems[t].name}-box`;
		$item.className = 'itemListCard';
		$item.innerHTML = `
    <div class="itemInfoBox tool-tip">
    <img onclick="deleteItem(${t})" src="https://www.arkresourcecalculator.com/assets/images/80px-${items[userAddedItems[t].name].name.replaceAll(" ","_").replaceAll(":","")}.png">
  <input min="1" class="itemAmountInput center-text mini-input" type="number" onchange="inputChange(${t})" id="${t}Shown" value="${userAddedItems[t].qty}">
  <input class="hidden" hidden id="${t}og" value="${userAddedItems[t].qty}">
  <span class="tooltiptext">${items[userAddedItems[t].name].displayName}</span>
  </div>
  <div class="recipe-box" id="item-${t}-recipe"></div>
  `;
		itemsList.appendChild($item);
		var itemRecipeID = document.getElementById(`item-${t}-recipe`);
		i = 0;
		var recipe = items[userAddedItems[t].name].resources;
		recipeItemLength = recipe.length;
		while (i < recipeItemLength) {
			let $p = document.createElement('div');
			$p.className = 'recipe-item-box tool-tip';
			$p.innerHTML = `
          <img src="https://www.arkresourcecalculator.com/assets/images/80px-${items[recipe[i].itemName].name.replaceAll(" ","_").replaceAll(":","")}.png">
    <input class="item-name fakeInput mini-input" readonly value="${recipe[i].amount * creationAmount}">
    <span class="tooltiptext">${recipe[i].itemName}</span>
    `;
			itemName = recipe[i].itemName;
			itemAmount = recipe[i].amount * creationAmount;
			addToTotal(itemName, itemAmount)
			itemRecipeID.appendChild($p);
			//renderTotalItems(recipe[i].item.name, recipe[i].amount * creationAmount, creationAmount)
			i++
		}
		t++
	}
}

function addToTotal(itemName, itemAmount) {
	//console.log(itemName, itemAmount)
	userAddedItemsTotal.push({
		itemName,
		itemAmount
	})
}

function renderTotal(edited, HighorLow, newEditedNumber) {
	itemsListTotals.innerHTML = "";
	totalItemsLength = userAddedItemsTotal.length;
	IT = 0;
	while (IT < totalItemsLength) {
		item = userAddedItemsTotal[IT].itemName;
		qty = userAddedItemsTotal[IT].itemAmount;
		if (document.getElementById(item)) {
			totalInput = document.getElementById(item.replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").toUpperCase())
			numberT = parseInt(totalInput.value, 10);
			numberY = parseInt(qty, 10);
			if (edited) {
				if (HighorLow == "lower") {
					//console.log(numberY, numberT)
					currentQtyT = (numberY - numberT) - (numberY * 2);
					currentQty = Math.abs(currentQtyT)
				} else {
					//console.log(HighorLow)
					currentQty = (numberT + numberY);
				}
			}
			if (!edited) {
				currentQty = numberT + numberY;
			}
			//console.log(numberT, numberY)
			totalInput.value = currentQty;
		} else {
			let $p = document.createElement('div');
			$p.className = "item-total tool-tip";
			$p.id = item;
			$p.innerHTML = `
           <img src="https://www.arkresourcecalculator.com/assets/images/80px-${items[item].name.replaceAll(" ","_").replaceAll(":","")}.png">
    <span class="tooltiptext">${item}</span>
    <input class="item-name fakeInput mini-input" readonly id="${item.replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").toUpperCase()}" value="${qty}">
    `;
			itemsListTotals.appendChild($p);
		}
		IT++
	}
}

function inputChange(itemId) {
	var itemAmtOrigInput = document.getElementById(`${itemId}Shown`);
	var itemNewAmt = itemAmtOrigInput.value;
	editItem(itemId, itemNewAmt)
	//console.log(itemAmtOrigAmt)
}

function clearItems() {
	userAddedItems = []
	userAddedItemsTotal = []
	render()
	renderTotal()
}

function deleteItem(itemId) {
	userAddedItemsTotal = [];
	userAddedItems.splice(itemId, 1);
	render();
	renderTotal();
}

function changeTab(tabNumber, tabName) {
    resourceCard.classList.add("hideOverflow");
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabNumber).className += " active";
  setTimeout(() => { resourceCard.classList.remove("hideOverflow"); }, 400);
  
}


function clearinput() {
	searchInput.value = "";
}
const fuse = new Fuse(itemNameList, {
	keys: ['name'],
	shouldSort: true,
	threshold: 0.5
})

function renderSearchResults() {	var searchResult = searchInput.value;
	var searchResult = searchInput.value;
  openAllItems()
  if(fuse.search(searchResult).length>0){
    itemSearch.innerHTML = `<div class="full-width searchResultAmount success">${fuse.search(searchResult).length} results</div>`;
  } else {
    itemSearch.innerHTML = `<div class="full-width searchResultAmount error">${fuse.search(searchResult).length} results</div>`;
  }
  
  document.getElementById("itemSearch").style.content.visibility = "auto";
  var results = fuse.search(searchResult);
  i = 0
  while(i<results.length && i < maxSearchResults) {
    //console.log(results[i].item.name)
    let $p = document.createElement('div');
			$p.className = "itemSearchResult";
			$p.innerHTML = `
      <div onclick="addItem('${results[i].item.name}',1)">
      <img loading=lazy src="https://www.arkresourcecalculator.com/assets/images/80px-${items[results[i].item.name].name.replaceAll(" ","_").replaceAll(":","")}.png">
      <p class="item-name mini">${results[i].item.name}</p>
      </div>
    `;
			itemSearch.appendChild($p);
    i++
  }
  //console.log(fuse.search(searchResult).length)
}


function openAllItems() {
  itemSearch.classList.add("openList");
  searchInput.classList.add("no-bottom-margin")
  searchInput.classList.add("no-bottom-border")
}
function closeAllItems() {
  itemSearch.classList.remove("openList");
  searchInput.classList.remove("no-bottom-margin")
  searchInput.classList.remove("no-bottom-border")
}

function getURLParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemName = urlParams.get('item');
  const itemAmount = urlParams.get('amount') || 1;
  if(!itemName) return
  addItem(itemName, itemAmount, 0)
  
}