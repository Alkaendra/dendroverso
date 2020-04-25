import React, { useEffect, useState } from 'react';
import {
  getNumberOfConnectedSystemsPerSector,
  getHabitablePlanetPopulation,
  getNumberOfSystemsWithHabitablePlanets,
  getResourceValue,
  habitablePlanetType,
  generateRandomNumber,
  generateSystemConnectivity,
} from './utils';

const BasicSectorGenerator: React.FC = () => {
  const [habitablePlanets, setHabitablePlanets] = useState([]);
  useEffect(() => {
    const sectorSystemsNumber: number = getNumberOfConnectedSystemsPerSector('medium');
    const habitablePlanetsNumber: number = getNumberOfSystemsWithHabitablePlanets(sectorSystemsNumber);
    let planetData: any = [];
    for (let i = 0; i <= habitablePlanetsNumber; i += 1) {
      const planet: any = {};
      planet.type = habitablePlanetType(generateRandomNumber(1, 100));
      planet.energeticResources = getResourceValue(planet.type.energeticResourcesMod);
      planet.foodResources = getResourceValue(planet.type.foodResourcesMod);
      planet.industrialResources = getResourceValue(planet.type.industrialResourcesMod);
      planet.population = getHabitablePlanetPopulation(planet.type.populationMod);
      planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100));

      planetData = [...planetData, planet];
    }
    console.log(planetData);
    setHabitablePlanets(planetData);
  }, []);
  return <div>{JSON.stringify(habitablePlanets)}</div>;
};

export default BasicSectorGenerator;
