import React from 'react';
import { habitablePlanetType, generateRandomNumber, getNumberOfSystemsWithHabitablePlanets } from './utils';
import { generateRandomNames } from './nomenclator/nomenclator-generator';
import { lenguaTaodara } from './nomenclator/nomenclator-saomico';

const BasicHabitablePlanetGenerator: React.FC = () => {
  const cawen: any = habitablePlanetType(generateRandomNumber(1, 100)).type;
  console.log(cawen, getNumberOfSystemsWithHabitablePlanets(generateRandomNumber(70, 150)));
  console.log(generateRandomNames(lenguaTaodara, 20));
  return <div>Hola:</div>;
};

export default BasicHabitablePlanetGenerator;
