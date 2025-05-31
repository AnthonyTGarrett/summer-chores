'use strict';

function mowYard(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} mowed the yard.`);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.6) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after collecting the wood.`);
      }
    }, 500);
  });
}

async function doSummerChores(name) {
  try {
    const yardMowed = await mowYard(name);
    console.log(yardMowed);

    const weedsEated = await weedEat(name);
    console.log(weedsEated);

    const hedgesTrimmed = await trimHedges(name);
    console.log(hedgesTrimmed);

    const woodCollected = await collectWood(name);
    console.log(woodCollected);

    const gardenWatered = await waterGarden(name);
    console.log(gardenWatered);

    console.log(`${name} finished all their chores.`);
  } catch (error) {
    console.error(error);
  }
}

doSummerChores('Anthony');
