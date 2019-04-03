const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.collectionOfDinos = [];

};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinos.push(dinosaur);
};



Park.prototype.removeDinosaur = function(dinosaur){
  total = this.collectionOfDinos.pop()
  return total
};

Park.prototype.findDinoWithMostVisitors = function () {
  let find = this.collectionOfDinos.sort((a,b) => (a.guestsAttractedPerDay < b.guestsAttractedPerDay)? 1: -1)
   console.log(find[0]);

};

 Park.prototype.speciesOfDinos = function(species){
  let dinoSpecies = []

  for (dinoSpecie of this.collectionOfDinos){
    if (dinoSpecies.species === species){
      dionSpecies.unshift(dinoSpecie)
    }
  };

  return dinoSpecies
};

Park.prototype.removeSpeciesofDinos = function(species){
  let dinoSpecies = []
  for (dinoSpecie of this.collectionOfDinos) {
    if (dinoSpecies.species !== species) {
      dinoSpecies.unshift(dinoSpecie)
    };
  };
  this.collectionOfDinos = dinoSpecies
};


Park.prototype.calculateGuestperDay = function () {
  let totalperday = 0;

  for (const guest of this.guestsAttractedPerDay) {
    totalperday += this.guestsAttractedPerDay;
  }

  return totalperday;
};

module.exports = Park;
