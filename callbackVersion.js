'use strict';

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
  }, 2000);
  callback(name, callback);
}
function weedEat(name, callback) {
  setTimeout(() => {
    console.log(`${name} finished using the weed eater.`);
  }, 1500);
  if (Math.random() < 0.9) {
    console.log(`${name} fell asleep after mowing the yard.`);
    return;
  }
  callback(name, callback);
}
function trimHedges(name, callback) {
  setTimeout(() => {
    console.log(`${name} finished trimming the hedges.`);
  }, 1000);
  if (Math.random() < 0.4) {
    console.log(`${name} fell asleep after weed eating the yard.`);
    return;
  }
  callback(name, callback);
}
function collectWood(name, callback) {
  setTimeout(() => {
    console.log(`${name} finished collecting wood.`);
  }, 2500);
  if (Math.random() < 0.6) {
    console.log(`${name} fell asleep after trimming the hedges.`);
    return;
  }
  callback(name, callback);
}
function waterGarden(name, callback) {
  setTimeout(() => {
    console.log(`${name} finished watering the garden.`);
  });
  if (Math.random() < 0.8)
    console.log(`${name} fell asleep after collecting the wood.`);
  callback(name, callback);
}
function doSummerChores(name) {
  mowYard(name, weedEat);
  console.log(`${name} finished all their chores.`);
}

doSummerChores('Tony');
