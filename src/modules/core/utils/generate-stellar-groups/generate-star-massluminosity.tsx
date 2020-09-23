const increasingVariationWithStarDecimalClass = (data: any, variation: number, decimalClass: number) => {
  const range = (variation / 10) * decimalClass;
  return data + range;
};

const decreasingVariationWithStarDecimalClass = (data: any, variation: number, decimalClass: number) => {
  const range = (variation / 10) * decimalClass;
  return data - range;
};

/**
 * Método para obtener la mass de una estrella. En mass solares.
 * @param mass
 * @param variation
 * @param decimalClass
 */
const getStarMass = (mass: number, variation: number, decimalClass: number) =>
  decreasingVariationWithStarDecimalClass(mass, variation, decimalClass);

/**
 * Método que obtiene el radius de la estrella. En radiuss solares.
 * @param radius
 * @param variation
 * @param decimalClass
 * @param variance Si el radius crece o decrece en función de la clase decimal
 */
export const getStarRadius = (radius: number, variation: number, decimalClass: number, variance: string) =>
  variance === 'decrece'
    ? decreasingVariationWithStarDecimalClass(radius, variation, decimalClass)
    : increasingVariationWithStarDecimalClass(radius, variation, decimalClass);

/**
 * Método que obtiene la temperature de una estrella.
 * @param temperature en grados Kelvin
 * @param variation diferencia entre los grados de una estrella
 * @param decimalClass clase decimal de la estrella
 */
const getStarTemperature = (temperature: number, variation: number, decimalClass: number) => {
  let starTemperature;
  let sunTemperature = 5778; // temperature del Sol en grados Kelvin

  starTemperature = decreasingVariationWithStarDecimalClass(temperature, variation, decimalClass) / sunTemperature;

  return starTemperature;
};

/**
 * Método que obtiene la luminosity de una estrella en función de su radius y temperature. El resultado en masss solares.
 * @param radius
 * @param temperature
 */
const getStarLuminosity = (mass: number, variation: number, decimalClass: number, variance: string) =>
  variance === 'decrece'
    ? decreasingVariationWithStarDecimalClass(mass, variation, decimalClass)
    : increasingVariationWithStarDecimalClass(mass, variation, decimalClass);

export const getLuminosityStarMassRadiusTemperature = (param: any) => {
  let gMasRadTempLumStar = {
    luminosity: 0.0,
    mass: 0.0,
    radius: 0.0,
    temperature: 0.0,
  };

  switch (true) {
    case param.spectralType === 'O':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(160.0, 97.0, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(80.0, 41.7, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(50000, 12000, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(40.36, 20.25, param.decimalClass, 'decrece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(140.0, 84.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(25.5, 5.3, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(50000, 22400, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(42.8, 21.63, param.decimalClass, 'decrece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(130.0, 84.1, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(20.2, 0.4, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(50000, 19800, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(30.31, 18.64, param.decimalClass, 'decrece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(120.0, 82.07, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(20.2, 5.1, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(50000, 19800, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(28.09, 17, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'B':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(44.7, 29.4, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(41.6, 48.4, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(25000, 13290, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(27.36, 10.25, param.decimalClass, 'decrece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(39.2, 26.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(26.2, 11.5, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(25000, 9670, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(22.8, 11.63, param.decimalClass, 'decrece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(33.8, 23.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(19.1, 2.6, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(28000, 13290, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(20.31, 13.64, param.decimalClass, 'decrece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(28.4, 20.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(14.5, 10.5, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(28000, 13290, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(18.09, 12, param.decimalClass, 'decrece');
          break;
        case 'IV':
          gMasRadTempLumStar.mass = getStarMass(22.9, 17.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(12.1, 8.8, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(28000, 13290, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(16.87, 13.34, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'A':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(13.7, 2.9, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(114, 135, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 1740, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(18.09, 2.71, param.decimalClass, 'decrece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(11.5, 2.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(43.5, 8.5, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 1740, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(11.07, 2.2, param.decimalClass, 'decrece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(9.4, 2.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(18.1, 0.2, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 2250, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(6.85, 1.9, param.decimalClass, 'decrece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(7.2, 1.9, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(4.35, 1.32, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 2250, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(4.09, 1.39, param.decimalClass, 'decrece');
          break;
        case 'IV':
          gMasRadTempLumStar.mass = getStarMass(5.1, 1.6, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(3.3, 1.1, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 2250, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(3.53, 1.42, param.decimalClass, 'decrece');
          break;
        case 'V':
          gMasRadTempLumStar.mass = getStarMass(2.9, 1.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(2.88, 1.13, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(9900, 2250, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(3.08, 1.39, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'F':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(10.8, 2.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(258, 85.0, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(7967, 1856, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(15.03, 0.3, param.decimalClass, 'crece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(8.9, 1.9, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(54.0, 22.6, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(7967, 1856, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(9.27, 0.67, param.decimalClass, 'crece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(7.1, 1.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(18.5, 6.3, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(7400, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(4.95, 0.1, param.decimalClass, 'crece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(5.3, 1.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(2.93, 3.24, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(7400, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(2.7, 0.07, param.decimalClass, 'crece');
          break;
        case 'IV':
          gMasRadTempLumStar.mass = getStarMass(3.4, 1.8, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(2.12, 0.47, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(7400, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(2.09, 0.49, param.decimalClass, 'decrece');
          break;
        case 'V':
          gMasRadTempLumStar.mass = getStarMass(1.6, 0.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(1.77, 0.47, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(7400, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(1.69, 0.64, param.decimalClass, 'decrece');
          break;
        case 'VI':
          gMasRadTempLumStar.mass = getStarMass(1.4, 0.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(0.9, 0.18, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(7400, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.99, 0.15, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'G':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(8.1, 1.8, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(367, 898, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(16.09, 1.54, param.decimalClass, 'crece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(3.8, 1.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(88.1, 158.9, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(8.84, 1.66, param.decimalClass, 'crece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(3.0, 1.1, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(29.2, 61.0, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(4.86, 0.84, param.decimalClass, 'crece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(2.3, 1.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(6.38, 16.22, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(2.06, 0.46, param.decimalClass, 'crece');
          break;
        case 'IV':
          gMasRadTempLumStar.mass = getStarMass(1.6, 0.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(2.38, 1.19, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(1.6, 0.13, param.decimalClass, 'decrece');
          break;
        case 'V':
          gMasRadTempLumStar.mass = getStarMass(1.1, 0.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(1.25, 0.22, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(1.05, 0.24, param.decimalClass, 'decrece');
          break;
        case 'VI':
          gMasRadTempLumStar.mass = getStarMass(0.9, 0.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(0.68, 0.12, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(5743, 1572, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.75, 0.17, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'K':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(11.1, 2.9, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(950, 320, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(4114, 389, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(17.65, 0.84, param.decimalClass, 'crece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(6.3, 3.4, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(262, 294, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(4114, 389, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(10.4, 4.25, param.decimalClass, 'crece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(4.9, 1.8, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(95, 58, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(4114, 389, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(5.46, 3.78, param.decimalClass, 'crece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(3.4, 2.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(23.9, 37, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(4114, 389, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(3.12, 1.54, param.decimalClass, 'crece');
          break;
        case 'IV':
          gMasRadTempLumStar.mass = getStarMass(2.0, 0.4, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(3.83, 6.97, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(4114, 389, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(1.47, 0, param.decimalClass, 'decrece');
          break;
        case 'V':
          gMasRadTempLumStar.mass = getStarMass(0.8, 0.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(1.05, 0.07, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(4900, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.81, 0.36, param.decimalClass, 'decrece');
          break;
        case 'VI':
          gMasRadTempLumStar.mass = getStarMass(0.7, 0.4, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(0.55, 0.01, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(4900, 1260, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.58, 0.26, param.decimalClass, 'decrece');
          break;
      }
      break;
    case param.spectralType === 'M':
      switch (param.luminosity_class) {
        case 'Ia':
          gMasRadTempLumStar.mass = getStarMass(13.3, 3.3, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(1310, 7480, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1710, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(18.49, 0.89, param.decimalClass, 'crece');
          break;
        case 'Ib':
          gMasRadTempLumStar.mass = getStarMass(10.7, 2.7, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(600, 3070, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1710, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(14.65, 3.86, param.decimalClass, 'crece');
          break;
        case 'II':
          gMasRadTempLumStar.mass = getStarMass(8.2, 2.2, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(158, 1302, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1710, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(8.24, 3.04, param.decimalClass, 'crece');
          break;
        case 'III':
          gMasRadTempLumStar.mass = getStarMass(5.6, 1.5, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(65.8, 1004.2, param.decimalClass, 'crece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1710, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(4.66, 2.54, param.decimalClass, 'crece');
          break;
        case 'V':
          gMasRadTempLumStar.mass = getStarMass(0.5, 0.4, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(0.99, 0.44, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1700, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.45, 0.22, param.decimalClass, 'decrece');
          break;
        case 'VI':
          gMasRadTempLumStar.mass = getStarMass(0.2, 0.1, param.decimalClass);
          gMasRadTempLumStar.radius = getStarRadius(0.54, 0.24, param.decimalClass, 'decrece');
          gMasRadTempLumStar.temperature = getStarTemperature(3700, 1700, param.decimalClass);
          gMasRadTempLumStar.luminosity = getStarLuminosity(0.32, 0.21, param.decimalClass, 'decrece');
          break;
      }
      break;
  }
  return {
    mass: parseFloat(gMasRadTempLumStar.mass.toFixed(3)),
    luminosity: parseFloat(gMasRadTempLumStar.luminosity.toFixed(3)),
    radius: parseFloat(gMasRadTempLumStar.radius.toFixed(3)),
  };
};
