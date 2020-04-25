import React from 'react';
import { habitablePlanetType, generateRandomNumber, getNumberOfSystemsWithHabitablePlanets } from './utils';

const BasicHabitablePlanetGenerator: React.FC = () => {
  const cawen: any = habitablePlanetType(generateRandomNumber(1, 100)).type;
  console.log(cawen, getNumberOfSystemsWithHabitablePlanets(generateRandomNumber(70, 150)));
  return <div>Hola:</div>;
};

export default BasicHabitablePlanetGenerator;
