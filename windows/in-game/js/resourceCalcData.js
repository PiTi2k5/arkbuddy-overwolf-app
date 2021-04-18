

var items = [];
var userAddedItems = [];
var userAddedItemsTotal = [];

// var favorites = localStorage.getItem("userFavorites");
// if(!localStorage.getItem("userFavorites")) {localStorage.setItem("verFavorites",[]);}

var favItemsArray = [{name:"Bow", amt:"1"}]
localStorage.setItem("userFavorites",JSON.stringify(favItemsArray));
function getData() {
fetch('https://assets.codepen.io/189049/items.json').then(response => response.json()).then(data => {
		dataString = JSON.stringify(data);
		itemsJSON = JSON.parse(dataString)
	}).then((data) => {
    itemsListAll = dataString;
		items = itemsJSON;

		startApp();
	})
}
//getData();

function startApp() {
	//addItem('Bow', 1, 0)
  renderSearchList();
}

function addItem(item, qty, edit) {
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
    if(!items[userAddedItems[t].name].resources) {
      return
    }
		let $item = document.createElement('div');
		var creationAmount = userAddedItems[t].qty;
		$item.id = `${userAddedItems[t].name}-box`;
		$item.className = 'itemListCard';
		$item.innerHTML = `
    <div class="itemInfoBox tool-tip">
    <img src="https://www.arkresourcecalculator.com/assets/images/80px-${items[userAddedItems[t].name].imageName}">
  <span class="tooltiptext">${items[userAddedItems[t].name].displayName}</span>
  <input min="1" class="itemAmountInput" type="number" onchange="inputChange(${t})" id="${t}Shown" value="${userAddedItems[t].qty}">
  <input hidden id="${t}og" value="${userAddedItems[t].qty}">
  </div>
  <div class="recipe-box" id="item-${t}-recipe"></div>
  <div class="delete"><p onclick="deleteItem(${t})""><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></p></div>
  `;
		itemsList.appendChild($item);
		var itemRecipeID = document.getElementById(`item-${t}-recipe`);
		i = 0;
		var recipe = items[userAddedItems[t].name].resources;
		recipeItemLength = recipe.length;
		while (i < recipeItemLength) {
			let $p = document.createElement('div');
			$p.className = 'tame-data';
			$p.innerHTML = `
     <div class="recipe-item-box tool-tip">
          <img src="https://www.arkresourcecalculator.com/assets/images/80px-${items[recipe[i].itemName].imageName}">

    <p class="item-name">${recipe[i].amount * creationAmount}</p> 
    <span class="tooltiptext">${recipe[i].itemName}</span>
    </p>
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
			totalInput = document.getElementById(item.replaceAll(" ", "").toUpperCase())
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
           <img src="https://www.arkresourcecalculator.com/assets/images/80px-${items[item].imageName}">
    <span class="tooltiptext">${item}</span>
    <input class="item-name" readonly id="${item.replaceAll(" ","").toUpperCase()}"" value="${qty}">
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







function renderSearchList() {
  allItemNames.forEach(myFunction); 
  function myFunction(itemName) {
    let $item = document.createElement('li');
		$item.className = 'itemSearchBox';
		$item.innerHTML = `
    <div class="itemSearchBoxInside" onclick="addItem('${itemName}',1)">
    <img loading=lazy src="https://www.arkresourcecalculator.com/assets/images/80px-${items[itemName].imageName}">
  <p class="item-name mini">${items[itemName].displayName}</p>
  </div>
  `;
		itemSearch.appendChild($item);

}
  
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


function searchItems() {
    var input, filter, ul, li, a, i, p;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("itemSearch");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function changeTab(tabNumber, tabName) {
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
}
changeTab('tab1', 'itemsList');

function clearinput() {
 searchInput.value=""; 
}