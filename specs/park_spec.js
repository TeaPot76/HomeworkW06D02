const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let park2;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("Avi", "omnivorous", 40);
    dinosaur3 = new Dinosaur("Avimivus", "omnivorous", 60);

    park1 = new Park('JS', 20, 30)
    park2 = new Park('JS', 15, 30)

  });

  it('should have a name', function(){
  const actual = park.name;
  assert.strictEqual(actual, 'JS');
  });

 it('should have a ticket price', function (){
   const actual = park.price;
   assert.strictEqual(actual, 20);

 });
  //
  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinos, expected);
 });

  it('should be able to add a dinosaur to its collection', function(){
  park.addDinosaur(dinosaur1);
  const expected = [dinosaur1];
  assert.deepStrictEqual(park.collectionOfDinos, expected)
 });

it('should be able to remove a dinosaur from its collection', function(){
 collectionOfDinos = [dinosaur1]
  park.removeDinosaur(dinosaur1)
  const expected = []
  assert.deepStrictEqual(park.collectionOfDinos, expected)
});
  //
   it('should be able to find the dinosaur that attracts the most visitors',
   function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.collectionOfDinos = [dinosaur1, dinosaur2, dinosaur3]

    const actual = dinosaur3.guestsAttractedPerDay
    assert.deepStrictEqual(actual, dinosaur3.guestsAttractedPerDay)
   });

   it('should be able to find all dinosaurs of a particular species', function(){
   park.addDinosaur(dinosaur1)
   park.addDinosaur(dinosaur2)
   park.addDinosaur(dinosaur3)

    const actual = [dinosaur1]
  assert.deepStrictEqual(actual, park.speciesOfDinos('t-rex') );
   });
  //
   it('should be able to remove all dinosaurs of a particular species',
   function(){
   park.addDinosaur(dinosaur1)
   park.addDinosaur(dinosaur2)
   park.addDinosaur(dinosaur3)

   park.removeSpeciesofDinos('t-rex')

  const actual = park.collectionOfDinos

   assert.deepStrictEqual(actual, park.collectionOfDinos)

  });

   it('should calculate the total number of visitors per day', function(){
     park.addDinosaur(dinosaur1)
     park.addDinosaur(dinosaur2)
     actual = dinosaur1.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay
     assert.deepStrictEqual(actual, 90)
   });

 });
