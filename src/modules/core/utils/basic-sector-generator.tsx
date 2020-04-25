import React, { useEffect, useState } from 'react';
import {
  getNumberOfConnectedSystemsPerSector,
  getNumberOfSystemsWithHabitablePlanets,
  habitablePlanetType,
  generateRandomNumber,
  generateSystemConnectivity,
  obtainAllModsFromSpecials,
  obtainRangedValue,
  resourcesOcurrenceTable,
  habitablePlanetPopulationTable,
  habitablePlanetSize,
} from './utils';

const BasicSectorGenerator: React.FC = () => {
  const [habitablePlanets, setHabitablePlanets] = useState([]);
  useEffect(() => {
    const sectorSystemsNumber: number = getNumberOfConnectedSystemsPerSector('medium');
    const habitablePlanetsNumber: number = getNumberOfSystemsWithHabitablePlanets(sectorSystemsNumber);
    let planetData: any = [];
    for (let i = 0; i <= habitablePlanetsNumber; i += 1) {
      const planet: any = {};
      const planetarySpecials = obtainAllModsFromSpecials();
      planet.type = habitablePlanetType(generateRandomNumber(1, 100));
      planet.size = habitablePlanetSize(generateRandomNumber(1, 100));
      planet.energeticResources = obtainRangedValue(
        0,
        6,
        planet.type.energeticResourcesMod,
        1,
        3,
        planetarySpecials.energeticResourcesMod,
        resourcesOcurrenceTable,
      );
      planet.foodResources = obtainRangedValue(
        0,
        6,
        planet.type.foodResourcesMod,
        1,
        3,
        planetarySpecials.foodResourcesMod,
        resourcesOcurrenceTable,
      );
      planet.industrialResources = obtainRangedValue(
        0,
        6,
        planet.type.industrialResourcesMod,
        1,
        3,
        planetarySpecials.industrialResourcesMod,
        resourcesOcurrenceTable,
      );
      planet.population = obtainRangedValue(
        0,
        9,
        planet.type.populationMod,
        3,
        7,
        planetarySpecials.populationMod,
        habitablePlanetPopulationTable,
      );
      planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
      planet.specials = planetarySpecials.specials;

      planetData = [...planetData, planet];
    }
    console.log(planetData, obtainAllModsFromSpecials());
    setHabitablePlanets(planetData);
  }, []);
  return <div>{JSON.stringify(habitablePlanets)}</div>;
};

export default BasicSectorGenerator;
