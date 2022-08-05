const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};


// this is a type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['cleare', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

// It is imidiately clear what we mean
const carStats = {
  horsepower: 400,
  weight: 3354
};
