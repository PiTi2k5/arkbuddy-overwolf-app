function renderTameRouletteApp() {
  appName.innerText = 'Tame Roulette';
  appView.innerHTML = ``;
  appView.innerHTML = `
  <div class="basic-card border-radius med-padding ">
  <div class="img-cont-tr">
<img id="creatureImg">
</div>
<span id="creatureName" class="random-dino"></span>
<btn onclick="tameRoulette()" class="next-button">Next</div>
</div>
  `;
  tameRoulette()
}
creatureList = ["Achatina", "Allosaurus", "Angler", "Ankylosaurus", "Araneo", "Archaeopteryx", "Argentavis", "Arthropluera", "Baryonyx", "Basilisk", "Basilosaurus", "Beelzebufo", "Bloodstalker", "Brontosaurus", "Bulbdog", "Carbonemys", "Carnotaurus", "Castoroides", "Chalicotherium", "Coelacanth", "Compy", "Crystal Wyvern", "Daeodon", "Deinonychus", "Desert Titan", "Dilophosaur", "Dimetrodon", "Dimorphodon", "Diplocaulus", "Diplodocus", "Direbear", "Direwolf", "Dodo", "Doedicurus", "Dung Beetle", "Dunkleosteus", "Electrophorus", "Enforcer", "Equus", "Featherlight", "Ferox", "Forest Titan", "Gacha", "Gallimimus", "Gasbags", "Giganotosaurus", "Gigantopithecus", "Glowtail", "Griffin", "Hesperornis", "Hyaenodon", "Ice Titan", "Ichthyornis", "Ichthyosaurus", "Iguanodon", "Jerboa", "Kairuku", "Kaprosuchus", "Karkinos", "Kentrosaurus", "Liopleurodon", "Lymantria", "Lystrosaurus", "Maewing", "Magmasaur", "Mammoth", "Managarmr", "Manta", "Mantis", "Megachelon", "Megalania", "Megaloceros", "Megalodon", "Megalosaurus", "Megatherium", "Mesopithecus", "Microraptor", "Morellatops", "Mosasaurus", "Moschops", "Noglin", "Onyc", "Otter", "Oviraptor", "Ovis", "Pachy", "Pachyrhinosaurus", "Paracer", "Parasaur", "Pegomastax", "Pelagornis", "Phiomia", "Phoenix", "Piranha", "Plesiosaur", "Procoptodon", "Pteranodon", "Pulmonoscorpius", "Purlovia", "Quetzal", "Raptor", "Ravager", "Reaper", "Rex", "Rock Drake", "Rock Elemental", "Roll Rat", "Royal Griffin", "Sabertooth", "Sarco", "Shadowmane", "Shinehorn", "Snow Owl", "Spinosaur", "Stegosaurus", "Tek Stryder", "Tapejara", "Terror Bird", "Therizinosaurus", "Thorny Dragon", "Thylacoleo", "Titanoboa", "Titanosaur", "Triceratops", "Troodon", "Tropeognathus", "Tusoteuthis", "Unicorn", "Velonasaur", "Voidwyrm", "Vulture", "Woolly Rhino", "Wyvern", "Yutyrannus"]
var all = ["Archaeopteryx","Argentavis","Astrocetus","Crystal Wyvern","Dimorphodon","Featherlight","Gasbags","Giant Bee","Glowbug","Griffin","Ichthyornis","Lymantria","Manticore","Onyc","Pelagornis","Phoenix","Pteranodon","Quetzal","Snow Owl","Tapejara","Tropeognathus","Vulture","Wyvern","Angler","Baryonyx","Basilosaurus","Castoroides","Diplocaulus","Dunkleosteus","Electrophorus","Hesperornis","Ichthyosaurus","Leedsichthys","Liopleurodon","Manta","Megachelon","Megalodon","Mosasaurus","Otter","Piranha","Plesiosaur","Sarco","Tusoteuthis","Achatina","Allosaurus","Ankylosaurus","Araneo","Arthropluera","Basilisk","Beelzebufo","Bloodstalker","Brontosaurus","Bulbdog","Carbonemys","Carnotaurus","Chalicotherium","Compy","Daeodon","Deathworm","Deinonychus","Dilophosaur","Dimetrodon","Diplodocus","Direbear","Direwolf","Dodo","Doedicurus","Dung Beetle","Equus","Ferox","Gacha","Gallimimus","Giganotosaurus","Gigantopithecus","Glowtail","Hyaenodon","Iguanodon","Jerboa","Kairuku","Kaprosuchus","Karkinos","Kentrosaurus","Lystrosaurus","Magmasaur","Mammoth","Managarmr","Mantis","Megalania","Megaloceros","Megalosaurus","Megapithecus","Megatherium","Mesopithecus","Microraptor","Morellatops","Moschops","Oviraptor","Ovis","Pachy","Pachyrhinosaurus","Paracer","Parasaur","Pegomastax","Phiomia","Procoptodon","Pulmonoscorpius","Purlovia","Raptor","Ravager","Reaper","Rex","Rock Drake","Rock Elemental","Roll Rat","Sabertooth","Shinehorn","Spinosaur","Stegosaurus","Terror Bird","Therizinosaurus","Thorny Dragon","Thylacoleo","Titanoboa","Titanosaur","Triceratops","Troodon","Unicorn","Velonasaur","Woolly Rhino","Yutyrannus"]
		var islandDinos = ["Achatina","Allosaurus","Angler","Ankylosaurus","Araneo","Archaeopteryx","Argentavis","Arthropluera","Baryonyx","Basilosaurus","Beelzebufo","Brontosaurus","Carbonemys","Carnotaurus","Castoroides","Chalicotherium","Coelacanth","Compy","Daeodon","Dilophosaur","Dimetrodon","Dimorphodon","Diplocaulus","Diplodocus","Direbear","Direwolf","Dodo","Doedicurus","Dung Beetle","Dunkleosteus","Electrophorus","Equus","Gallimimus","Giant Bee","Giganotosaurus","Gigantopithecus","Hesperornis","Hyaenodon","Ichthyornis","Ichthyosaurus","Iguanodon","Kairuku","Kaprosuchus","Kentrosaurus","Leedsichthys","Liopleurodon","Lystrosaurus","Mammoth","Manta","Megalania","Megaloceros","Megalodon","Megalosaurus","Megapithecus","Megatherium","Mesopithecus","Microraptor","Mosasaurus","Moschops","Onyc","Otter","Oviraptor","Ovis","Pachy","Pachyrhinosaurus","paracer","Parasaur","Pegomastax","Pelagornis","Phiomia","Plesiosaur","Procoptodon","Pteranodon","Pulmonoscorpius","Purlovia","Quetzal","Raptor","Rex","Sabertooth","Sarco","Spinosaurus","Stegosaurus","Tapejara","Terror Bird","Therizinosaurus","Thylacoleo","Titanoboa","Titanosaur","Triceratops","Troodon","Tusoteuthis","Unicorn","Woolly Rhino","Yeti","Yutyrannus"] 
		var centerDinos = ["Achatina","Allosaurus","Ammonite","Angler","Ankylosaurus","Araneo","Archaeopteryx","Argentavis","Arthropluera","Baryonyx","Basilosaurus","Beelzebufo","Brontosaurus","Carbonemys","Carnotaurus","Castoroides","Chalicotherium","Compy","Daeodon","Dilophosaur","Dimetrodon","Dimorphodon","Diplocaulus","Diplodocus","Direbear","Direwolf","Dodo","Doedicurus","Dung Beetle","Dunkleosteus","Electrophorus","Equus","Gallimimus","Giant Bee","Giganotosaurus","Gigantopithecus","Hesperornis","Hyaenodon","Ichthyornis","Ichthyosaurus","Iguanodon","Kairuku","Kaprosuchus","Kentrosaurus","Leedsichthys","Liopleurodon","Lystrosaurus","Mammoth","Manta","Megalania","Megaloceros","Megalodon","Megalosaurus","Megapithecus","Megatherium","Mesopithecus","Microraptor","Mosasaurus","Moschops","Onyc","Otter","Oviraptor","Ovis","Pachy","Pachyrhinosaurus","paracer","Parasaur","Pegomastax","Pelagornis","Phiomia","Piranha","Plesiosaur","Procoptodon","Pteranodon","Pulmonoscorpius","Purlovia","Quetzal","Raptor","Rex","Sabertooth","Sarco","Spinosaurus","Stegosaurus","Tapejara","Terror Bird","Therizinosaurus","Thylacoleo","Titanoboa","Titanosaur","Triceratops","Trilobite","Troodon","Tusoteuthis","Unicorn","Woolly Rhino","Yeti","Yutyrannus"]
		var ragnarokDinos = ["Achatina","Allosaurus","Angler","Ankylosaurus","Araneo","Archaeopteryx","Argentavis","Arthropluera","Baryonyx","Basilosaurus","Beelzebufo","Brontosaurus","Carbonemys","Carnotaurus","Castoroides","Chalicotherium","Compy","Daeodon","Dilophosaur","Dimetrodon","Dimorphodon","Diplocaulus","Diplodocus","Direbear","Direwolf","Dodo","Doedicurus","Dung Beetle","Dunkleosteus","Electrophorus","Equus","Gallimimus","Giant Bee","Giganotosaurus","Gigantopithecus","Griffin","Hesperornis","Hyaenodon","Ichthyornis","Ichthyosaurus","Iguanodon","Jerboa","Kairuku","Kaprosuchus","Kentrosaurus","Leedsichthys","Liopleurodon","Lymantria","Lystrosaurus","Mammoth","Manta","Mantis","Megalania","Megaloceros","Megalodon","Megalosaurus","Megatherium","Mesopithecus","Microraptor","Morellatops","Mosasaurus","Moschops","Onyc","Otter","Oviraptor","Ovis","Pachy","Pachyrhinosaurus","paracer","Parasaur","Pegomastax","Pelagornis","Phiomia","Plesiosaur","Procoptodon","Pteranodon","Pulmonoscorpius","Purlovia","Quetzal","Raptor","Rex","Rock Elemental","Sabertooth","Sarco","Spinosaurus","Stegosaurus","Tapejara","Terror Bird","Therizinosaurus","Thorny Dragon","Thylacoleo","Titanoboa","Titanosaur","Triceratops","Troodon","Tusoteuthis","Unicorn","Vulture","Woolly Rhino","Wyvern","Yutyrannus"]
		var aberrationDinos = ["Achatina","Angler","Ankylosaurus","Araneo","Arthropluera","Baryonyx","Basilisk","Beelzebufo","Bulbdog","Carbonemys","Carnotaurus","Cnidaria","Dimetrodon","Dimorphodon","Diplocaulus","Diplodocus","Direbear","Dodo","Doedicurus","Dung Beetle","Electrophorus","Equus","Featherlight","Giant Bee","Gigantopithecus","Glowbug","Glowtail","Iguanodon","Karkinos","Lamprey","Lystrosaurus","Manta","Megalosaurus","Moschops","Otter","Ovis","paracer","Parasaur","Pulmonoscorpius","Purlovia","Raptor","Ravager","Reaper","Roll Rat","Sarco","Shinehorn","Spinosaurus","Stegosaurus","Titanoboa","Triceratops","Unicorn"]
		var extinctionDinos = ["Achatina","Allosaurus","Ankylosaurus","Araneo","Archaeopteryx","Argentavis","Baryonyx","Beelzebufo","Brontosaurus","Carbonemys","Carnotaurus","Castoroides","Chalicotherium","Compy","Daeodon","Dilophosaur","Dimetrodon","Dimorphodon","Diplodocus","Direbear","Direwolf","Dodo","Doedicurus","Dung Beetle","Equus","Gacha","Gallimimus","Gasbags","Giant Bee","Giganotosaurus","Hesperornis","Hyaenodon","Ice Titan","Ichthyornis","Iguanodon","Kairuku","Kaprosuchus","Kentrosaurus","Lymantria","Lystrosaurus","Mammoth","Managarmr","Manta","Mantis","Megalania","Megaloceros","Megalosaurus","Megatherium","Mesopithecus","Microraptor","Morellatops","Moschops","Onyc","Otter","Oviraptor","Ovis","Pachy","Pachyrhinosaurus","paracer","Parasaur","Phiomia","Procoptodon","Pteranodon","Pulmonoscorpius","Purlovia","Quetzal","Raptor","Rex","Rock Elemental","Sabertooth","Sarco","Snow Owl","Spinosaurus","Stegosaurus","Tapejara","Therizinosaurus","Thorny Dragon","Thylacoleo","Titanoboa","Triceratops","Troodon","Unicorn","Velonasaur","Wyvern","Yeti","Yutyrannus"];



function tameRoulette() {
  var selectedMap = creatureList;
	var dinoRandomizer = selectedMap[Math.floor(Math.random() * selectedMap.length)];
  var randomDino = dinoRandomizer.split(' ').join('').toLowerCase();
  var randomDinoFullName = dinoRandomizer.toLowerCase();
  var dinolevel = Math.floor(Math.random() * 150);
	document.getElementById("creatureName").innerHTML = randomDinoFullName;
	document.getElementById("creatureImg").src = 'https://www.dododex.com/media/creature/' + randomDino + '.png';
 	
}
 