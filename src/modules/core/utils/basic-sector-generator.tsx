import React, { useEffect } from 'react';
import { generateRandomNames } from './nomenclator/nomenclator-generator';
import { lenguaDarmuttana } from './nomenclator/nomenclator-darmuttano';
// import { lenguaTaodara } from './nomenclator/nomenclator-saomico';

// import { generateManySystems } from './generate-systems/generate-uninhabited-system';
import { generateSector } from './generate-sectors/generate-sector';
import { SECTOR_ROLE } from '../../admin/components/admin-commons/admin-models/sector.model';

const BasicSectorGenerator: React.FC = () => {
  // const [habitablePlanets, setHabitablePlanets] = useState([]);
  // let supraregion: any = {};
  // let system: any = {};
  useEffect(() => {
    // const sectorSystemsNumber: number = getNumberOfConnectedSystemsPerSector('medium');
    // const habitablePlanetsNumber: number = getNumberOfSystemsWithHabitablePlanets(sectorSystemsNumber);
    // let planetData: any = [];
    // for (let i = 0; i <= habitablePlanetsNumber; i += 1) {
    //   const planet: any = {};
    //   const planetarySpecials = obtainAllModsFromSpecials();
    //   planet.type = habitablePlanetType(generateRandomNumber(1, 110));
    //   planet.size = habitablePlanetSize(generateRandomNumber(1, 100));
    //   planet.population = obtainRangedValue(
    //     0,
    //     9,
    //     planet.type.populationMod,
    //     3,
    //     7,
    //     planetarySpecials.populationMod,
    //     habitablePlanetPopulationTable,
    //   );
    //   planet.development = generatePlanetaryDevelopment(planet.population);
    //   planet.energeticResources = obtainRangedValue(
    //     0,
    //     6,
    //     planet.type.energeticResourcesMod,
    //     1,
    //     2,
    //     planetarySpecials.energeticResourcesMod - planet.development.industrialDevelopment,
    //     resourcesOcurrenceTable,
    //   );
    //   planet.foodResources = obtainRangedValue(
    //     0,
    //     6,
    //     planet.type.foodResourcesMod,
    //     1,
    //     3,
    //     planetarySpecials.foodResourcesMod,
    //     resourcesOcurrenceTable,
    //   );
    //   planet.industrialResources = obtainRangedValue(
    //     0,
    //     6,
    //     planet.type.industrialResourcesMod,
    //     1,
    //     2,
    //     planetarySpecials.industrialResourcesMod - planet.development.industrialDevelopment,
    //     resourcesOcurrenceTable,
    //   );
    //   planet.development.economicalDevelopment = obtainFinalEconomicalDevelopment(
    //     planet.energeticResources.economicalMod,
    //     planet.foodResources.economicalMod,
    //     planet.industrialResources.economicalMod,
    //     planet.development.economicalDevelopment,
    //   );
    //   planet.systemConnectivity = generateSystemConnectivity(generateRandomNumber(1, 100));
    //   planet.specials = planetarySpecials.specials;
    //   planet.placesOfInterest = generateTotalPlacesOfInterest(planet.type);

    //   planetData = [...planetData, planet];
    // }
    // console.log(planetData, obtainAllModsFromSpecials());
    console.log('NOMES', generateRandomNames(lenguaDarmuttana, 20));
    // console.log('VALORES ', reducingCosa(cosa));
    // system = generateStarSystem(0);
    // // this.obtainHabitablePlanets(this.supraregion[`Suprarregion`].connectedSystems);
    // console.log(system);
    // // supraregion = generateSuprarregionStarSystems();
    // // console.log(supraregion);
    // let habPlanets: any[] = generateSectorHabitablePlanets(generateRandomNumber(5, 12));
    // console.log('PLANETAS ', habPlanets);
    // console.log('SISTEMA DESHABITADO', generateManySystems(generateRandomNumber(10, 12)));
    console.log('SECTOR ', generateSector(SECTOR_ROLE.ADMINISTRATIVE));
    // console.log(generatePlanet(star.luminosity));
  }, []);
  return <div></div>;
};

export default BasicSectorGenerator;
