'use strict';

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
  }, 2000);
  weedEat(name, trimHedges);
}
function weedEat(name, callback) {
  setTimeout(() => {
    console.log(`${name} finished using the weed eater.`);
  }, 1500);

  console.log(`${name} fell asleep after moving the yard.`);
}
function trimHedges(name, callback) {
  console.log(`${name} finished trimming the hedges.`);
  console.log(`${name} fell asleep after trimming the hedges.`);
}
function collectWood(name, callback) {
  console.log(`${name} finished collecting wood.`);
  console.log(`${name} fell asleep after collecting wood.`);
}
function waterGarden(name, callback) {
  console.log(`${name} finished watering the garden.`);
  console.log(`${name} fell asleep after watering the garden.`);
}
function doSummerChores(name) {
  mowYard(name, weedEat);
  console.log(`${name} finished all their chores.`);
}

doSummerChores('Tony');
