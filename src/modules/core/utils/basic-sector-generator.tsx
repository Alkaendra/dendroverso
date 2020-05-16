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
  generatePlanetaryDevelopment,
  obtainFinalEconomicalDevelopment,
} from './utils';
import { generateRandomNames } from './nomenclator/nomenclator-generator';
import { lenguaTaodara } from './nomenclator/nomenclator-saomico';
import { generateTotalPlacesOfInterest } from './habitable-planet-specials/places-of-interest-specials';

const BasicSectorGenerator: React.FC = () => {
  const [habitablePlanets, setHabitablePlanets] = useState([]);
  useEffect(() => {
    const sectorSystemsNumber: number = getNumberOfConnectedSystemsPerSector('medium');
    const habitablePlanetsNumber: number = getNumberOfSystemsWithHabitablePlanets(sectorSystemsNumber);
    let planetData: any = [];
    for (let i = 0; i <= habitablePlanetsNumber; i += 1) {
      const planet: any = {};
      const planetarySpecials = obtainAllModsFromSpecials();
      planet.type = habitablePlanetType(generateRandomNumber(1, 110));
      planet.size = habitablePlanetSize(generateRandomNumber(1, 100));
      planet.population = obtainRangedValue(
        0,
        9,
        planet.type.populationMod,
        3,
        7,
        planetarySpecials.populationMod,
        habitablePlanetPopulationTable,
      );
      planet.development = generatePlanetaryDevelopment(planet.population);
      planet.energeticResources = obtainRangedValue(
        0,
        6,
        planet.type.energeticResourcesMod,
        1,
        2,
        planetarySpecials.energeticResourcesMod - planet.development.industrialDevelopment,
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
        2,
        planetarySpecials.industrialResourcesMod - planet.development.industrialDevelopment,
        resourcesOcurrenceTable,
      );
      planet.development.economicalDevelopment = obtainFinalEconomicalDevelopment(
        planet.energeticResources.economicalMod,
        planet.foodResources.economicalMod,
        planet.industrialResources.economicalMod,
        planet.development.economicalDevelopment,
      );
      planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
      planet.specials = planetarySpecials.specials;
      planet.placesOfInterest = generateTotalPlacesOfInterest(planet.type);

      planetData = [...planetData, planet];
    }
    console.log(planetData, obtainAllModsFromSpecials());
    console.log(generateRandomNames(lenguaTaodara, 20));
    setHabitablePlanets(planetData);
  }, []);
  return <div>{JSON.stringify(habitablePlanets)}</div>;
};

export default BasicSectorGenerator;
