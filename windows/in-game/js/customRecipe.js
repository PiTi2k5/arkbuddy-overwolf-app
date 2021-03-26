function renderCustomRecipeApp() {
  appName.innerText = 'Custom Recipe Calculator';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card fuel-card">
  
  <div class="flex radius margin-bottom full-tile">
  <div class="quarter-tile">
  <img class="small-img" src="https://res.cloudinary.com/tristangregory/image/upload/v1614464536/ark/items/Health.png">
  <h3><span class="block medium-text" id="consumableHealth"></span>
  <span class="light">Health</span></h3>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://res.cloudinary.com/tristangregory/image/upload/v1614464536/ark/items/Stamina.png">
  <h3><span class="block medium-text" id="consumableStamina"></span>
  <span class="light">Stamina</span></h3>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://res.cloudinary.com/tristangregory/image/upload/v1614464536/ark/items/Food.png">
  <h3><span class="block medium-text" id="consumableFood"></span>
  <span class="light">Food</span></h3>
  </div>
  
  <div class="quarter-tile">
  <img class="small-img" src="https://res.cloudinary.com/tristangregory/image/upload/v1614464536/ark/items/Water.png">
  <h3><span class="block medium-text" id="consumableWater"></span>
  <span class="light">Water</span></h3>
  </div>
  </div>
  
  <div class="input-box three-quarter no-padding">
  <select onChange="craftCustomConsumable()" id="item1">
  <option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 1</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item1QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item2">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 2</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item2QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item3">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 3</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item3QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item4">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 4</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item4QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item5">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 5</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item5QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item6">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 6</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item6QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item7">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 7</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item7QtyInput" value="0">
</div>

<div class="input-box three-quarter no-padding">
<select onChange="craftCustomConsumable()" id="item8">
<option hp="0" stamina="0" food="0" water="0" weight="0">Select Ingredient 8</option>
<option hp="0.1" stamina="0.1" food="0.1" water="0.1" weight="0.01">Element Dust</option>
<option hp="0.11" stamina="0.01" food="0.2" water="0.02" weight="0.02">Giant Bee Honey</option>
<option hp="-0.5" stamina="-0.3" food="0.0625" water="0.01" weight="0.01">Spoiled Meat</option>
<option hp="0.11" stamina="0.01" food="0.15" water="0.01" weight="0.02">Raw Meat</option>
<option hp="0.24" stamina="0.01" food="0.2" water="0.0" weight="0.02">Raw Prime Meat</option> 
<option hp="0.11" stamina="0.01" food="0.2" water="0.01" weight="0.02">Cooked Meat</option>  
<option hp="0.33" stamina="0.01" food="0.29" water="0.01" weight="0.02">Cooked Prime Meat</option>  
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Narcoberry</option>  
<option hp="0.01" stamina="0.125" food="0.0375" water="-0.25" weight="0.01">Stimberry</option> 
<option hp="0.01" stamina="0.01" food="0.0525" water="0.035" weight="0.01">Mejoberry</option>
<option hp="0.01" stamina="0.01" food="0.0375" water="0.025" weight="0.01">Berries</option>
<option hp="0.055" stamina="0.05" food="0.06" water="0.5" weight="0.02">Crops</option>  
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="0.01">Seeds</option>
<option hp="0.01" stamina="0.01" food="0.01" water="0.01" weight="1.0">Rare Flower</option>  
<option hp="0.01" stamina="1.0" food="0.01" water="0.01" weight="0.01">Rare Mushroom</option> 
<option hp="0.8" stamina="0.8" food="0.8" water="0.01" weight="0.03">Egg</option>  
<option hp="0.01" stamina="3.0" food="2.25" water="-1.0" weight="0.05">Kibble</option>  
<option hp="0.1" stamina="0.01" food="0.1" water="0.01" weight="0.02">Sweet Vegetable Cake</option>
<option hp="-0.05" stamina="-0.05" food="0.1" water="-0.05" weight="0.01">Soap</option>
<option hp="-0.5" stamina="-0.5" food="0.1" water="-0.5" weight="0.01">Organic Polymer</option> 
<option hp="0.01" stamina="0.1" food="0.05" water="0.2" weight="0.01">Aquatic Mushroom</option>
<option hp="0.05" stamina="0.2" food="0.1" water="0" weight="0.01">Aggeravic Mushroom</option>
<option hp="0.01" stamina="0.5" food="0.0375" water="-0.25" weight="0.01">Auric Mushroom</option>
<option hp="0.01" stamina="-0.1" food="0.1" water="0.01" weight="0.01">Ascerbic Mushroom</option>
</select>
</div>

<div class="input-box quarter-tile right-side no-padding">
<input type="number" onKeyUp="craftCustomConsumable()" onChange="craftCustomConsumable()" id="item8QtyInput" value="0">
</div>

  
  <div class="full-tile light-border-top">
  <span class="setting-notice lighter mini">Crafting speed is set to <span class="light" id="craftingSpeedText"></span></span>
  </div>
  </div>
<div class="large-space" style="height: 500px;"></div>
  `;
  craftingSpeedText.innerText = craftingSpeedPercent +"%";
craftCustomConsumable();
}

function craftCustomConsumable() {
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var item7 = document.getElementById('item7');
var item8 = document.getElementById('item8');
  
var item1Qty = document.getElementById('item1QtyInput').valueAsNumber || 0;
var item2Qty = document.getElementById('item2QtyInput').valueAsNumber || 0;
var item3Qty = document.getElementById('item3QtyInput').valueAsNumber || 0;
var item4Qty = document.getElementById('item4QtyInput').valueAsNumber || 0;
var item5Qty = document.getElementById('item5QtyInput').valueAsNumber || 0;
var item6Qty = document.getElementById('item6QtyInput').valueAsNumber || 0;
var item7Qty = document.getElementById('item7QtyInput').valueAsNumber || 0;
var item8Qty = document.getElementById('item8QtyInput').valueAsNumber || 0;
  
//console.log(item1Qty, item2Qty, item3Qty, item4Qty, item5Qty, item6Qty, item6Qty, item7Qty, item8Qty)
var item1Selected = item1.options[item1.selectedIndex];
var item1HP = item1Selected.getAttribute('hp');
var item1Stamina = item1Selected.getAttribute('stamina');
var item1Food = item1Selected.getAttribute('food');
var item1Water = item1Selected.getAttribute('water');
var item1Weight = item1Selected.getAttribute('weight');

var item2Selected = item2.options[item2.selectedIndex];
var item2HP = item2Selected.getAttribute('hp');
var item2Stamina = item2Selected.getAttribute('stamina');
var item2Food = item2Selected.getAttribute('food');
var item2Water = item2Selected.getAttribute('water');
var item2Weight = item2Selected.getAttribute('weight');
  
var item3Selected = item3.options[item3.selectedIndex];
var item3HP = item3Selected.getAttribute('hp');
var item3Stamina = item3Selected.getAttribute('stamina');
var item3Food = item3Selected.getAttribute('food');
var item3Water = item3Selected.getAttribute('water');
var item3Weight = item3Selected.getAttribute('weight');

var item4Selected = item4.options[item4.selectedIndex];
var item4HP = item4Selected.getAttribute('hp');
var item4Stamina = item4Selected.getAttribute('stamina');
var item4Food = item4Selected.getAttribute('food');
var item4Water = item4Selected.getAttribute('water');
var item4Weight = item4Selected.getAttribute('weight');

var item5Selected = item5.options[item5.selectedIndex];
var item5HP = item5Selected.getAttribute('hp');
var item5Stamina = item5Selected.getAttribute('stamina');
var item5Food = item5Selected.getAttribute('food');
var item5Water = item5Selected.getAttribute('water');
var item5Weight = item5Selected.getAttribute('weight');

var item6Selected = item6.options[item6.selectedIndex];
var item6HP = item6Selected.getAttribute('hp');
var item6Stamina = item6Selected.getAttribute('stamina');
var item6Food = item6Selected.getAttribute('food');
var item6Water = item6Selected.getAttribute('water');
var item6Weight = item6Selected.getAttribute('weight');

var item7Selected = item7.options[item7.selectedIndex];
var item7HP = item7Selected.getAttribute('hp');
var item7Stamina = item7Selected.getAttribute('stamina');
var item7Food = item7Selected.getAttribute('food');
var item7Water = item7Selected.getAttribute('water');
var item7Weight = item7Selected.getAttribute('weight');

var item8Selected = item8.options[item8.selectedIndex];
var item8HP = item8Selected.getAttribute('hp');
var item8Stamina = item8Selected.getAttribute('stamina');
var item8Food = item8Selected.getAttribute('food');
var item8Water = item8Selected.getAttribute('water');
var item8Weight = item8Selected.getAttribute('weight');




  
var recipeHP = 1 + (craftingSpeed * 1.5625 - 0.3125) * (5 * item1HP * item1Qty + 5 * item2HP * item2Qty + 5 * item3HP * item3Qty + 5 * item4HP * item4Qty + 5 * item5HP * item5Qty + 5 * item6HP * item6Qty + 5 * item7HP * item7Qty + 5 * item8HP * item8Qty).toFixed(2);

var recipeStamina = 1 + (craftingSpeed * 1.5625 - 0.3125) * (5 * item1Stamina * item1Qty + 5 * item2Stamina * item2Qty + 5 * item3Stamina * item3Qty + 5 * item4Stamina * item4Qty + 5 * item5Stamina * item5Qty + 5 * item6Stamina * item6Qty + 5 * item7Stamina * item7Qty + 5 * item8Stamina * item8Qty).toFixed(2);

var recipeFood = 1 + (craftingSpeed * 1.5625 - 0.3125) * (5 * item1Food * item1Qty + 5 * item2Food * item2Qty + 5 * item3Food * item3Qty + 5 * item4Food * item4Qty + 5 * item5Food * item5Qty + 5 * item6Food * item6Qty + 5 * item7Food * item7Qty + 5 * item8Food * item8Qty).toFixed(2);

var recipeWater = 1 + (craftingSpeed * 1.5625 - 0.3125) * (5 * item1Water * item1Qty + 5 * item2Water * item2Qty + 5 * item3Water * item3Qty + 5 * item4Water * item4Qty + 5 * item5Water * item5Qty + 5 * item6Water * item6Qty + 5 * item7Water * item7Qty + 5 * item8Water * item8Qty).toFixed(2);
  
  
//console.log(recipeHP, recipeStamina, recipeFood, recipeWater);
  consumableHealth.innerText = recipeHP || 0;
  consumableStamina.innerText = recipeStamina || 0;
  consumableFood.innerText = recipeFood || 0;
  consumableWater.innerText = recipeWater || 0;
}

 
