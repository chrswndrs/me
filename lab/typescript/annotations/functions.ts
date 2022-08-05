const add = (a: number, b: number): number => {
  return a + b;
};

// we want to always use the type definition to get better linting  
// if we would leave the number after the parameter definition and type definition 
// the function would use infrence wrongish
const substract = (a: number, b: number) => {
  a - b;
};
// uncomment this code to see the error message from typescript
// const substract = (a: number, b: number): number => {
//   a - b;
// };

// this would be the super strict and correct way to do it
// const substract = (a: number, b: number): number => {
//   return a - b;
// };

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

// void to tell there will not be a return value
// could also use return null; or return undefined;
const logger = (message: string): void => {
  console.log(message);
}

// never actually reaach the end of the function
// would be rare to use it like this
const throwError = (message: string): never => {
  throw new Error(message);

}

// this would ne a more normal usecase
// const throwError = (message: string): string => {
//   if (!message) {
//     throw new Error(message);
//   }
// };

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
