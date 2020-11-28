import { generateRandomFloat, generateRandomNumber } from '../utils';

interface Density {
  label: string;
  value: number;
}

interface Gravity {
  g: number;
  gravityIhMod: number;
}

interface Radio {
  radioComparedToEarth: number;
  radioInKMS: number;
}

interface Size {
  cod: string;
  label: string;
}

export interface AstrophysicalData {
  axisTilt: number;
  density: Density;
  escapeVelocity: number;
  gravity: Gravity;
  magnetoSphere: number;
  mass: number;
  radio: Radio;
  size: Size;
}

const habitablePlanetSize: any = (result: number) => ({
  ...(result > 0 &&
    result <= 10 && {
      culturalDevelopmentMod: -2,
      economicalDevelopmentMod: -2,
      industrialDevelopmentMod: -1,
      militaryDevelopmentMod: 0,
      technologicalDevelopmentMod: -2,
      label: 'Mini Tierra',
      size: 'mT',
    }),
  ...(result > 10 &&
    result <= 30 && {
      culturalDevelopmentMod: -1,
      economicalDevelopmentMod: -1,
      industrialDevelopmentMod: -1,
      militaryDevelopmentMod: 0,
      technologicalDevelopmentMod: -1,
      label: 'Sub Tierra',
      size: 'sT',
    }),
  ...(result > 30 &&
    result <= 65 && {
      culturalDevelopmentMod: 0,
      economicalDevelopmentMod: 0,
      industrialDevelopmentMod: 0,
      militaryDevelopmentMod: 0,
      technologicalDevelopmentMod: 0,
      label: 'Tierra',
      size: 'T',
    }),
  ...(result > 65 &&
    result <= 98 && {
      culturalDevelopmentMod: 2,
      economicalDevelopmentMod: 2,
      industrialDevelopmentMod: 2,
      militaryDevelopmentMod: 0,
      technologicalDevelopmentMod: 2,
      label: 'Super Tierra',
      size: 'ST',
    }),
  ...(result > 98 && {
    label: 'Núcleo Desnudo de Gigante Gaseoso',
    size: 'NdGg',
  }),
});

const getRadio = (type: string) => {
  let radio: any = {
    ...(type === 'mt' && {
      value: generateRandomFloat(0.03, 0.4),
    }),
    ...(type === 'sT' && {
      value: generateRandomFloat(0.4, 0.8),
    }),
    ...(type === 'T' && {
      value: generateRandomFloat(0.8, 1.5),
    }),
    ...(type === 'ST' && {
      value: generateRandomFloat(1.5, 2.5),
    }),
    ...(type === 'NdGg' && {
      value: generateRandomFloat(2.5, 3.5),
    }),
  };

  return { radio: radio.value, radioKMS: radio.value * 6371 };
};

const getDensidad = () => {
  let d: any = {};
  let densityRandomNumber = generateRandomNumber(1, 12);

  if (densityRandomNumber <= 3) {
    d['exp'] = 'Núcleo Sólido';
    d['val'] = generateRandomFloat(1.1, 2.25);
  } else {
    d['exp'] = 'Núcleo Fundido';
    d['val'] = generateRandomFloat(0.82, 1.12);
  }

  return d;
};

const getMagnetosfera = (densidad_tipo: string) => {
  let magnetoEsfera = 0.0;

  if (densidad_tipo === 'Núcleo Sólido') {
    magnetoEsfera = generateRandomFloat(0.1, 0.7);
  } else {
    magnetoEsfera = generateRandomFloat(0.71, 1.35);
  }

  return magnetoEsfera;
};

const getVolumen = (radio: number) => {
  // Cálculo del volumen de un planeta utilizando como unidad de medida el Volúmen de la Tierra
  const volPlaneta = ((4 / 3) * 3.1416 * Math.pow(radio, 3)) / 4.188;

  return volPlaneta;
};

// Masa en función de la masa de la Tierra
const getMasa = (densidad: number, volumen: number) => {
  const masa = densidad * volumen;

  return masa;
};

// Cálculo de la gravedad de un planeta utilizando como unidad de medida g = gravedad de la Tierra
const getGravedad = (masa: number, radio: number) => {
  if (masa === 0 || radio === 0) {
    masa = 0.001;
    radio = 0.1;
  }

  const gPlaneta = masa / Math.pow(radio, 2);

  const obtainGravityIHMod = (gPlaneta: number) => {
    if ((gPlaneta >= 1.3 && gPlaneta <= 1.5) || (gPlaneta >= 0.5 && gPlaneta <= 0.7)) {
      return -1;
    } else if (gPlaneta > 1.5 || gPlaneta < 0.5) {
      return -2;
    }
    return 2;
  };

  return { g: gPlaneta, gravityIHMod: obtainGravityIHMod(gPlaneta) };
};

//velocidad de escape en km/s
const getVelocidadEscape = (masa: number, radio: number) => {
  const vE = Math.sqrt((2 * 6.6704 * masa * 59720000000) / (radio * 6371)) / 1000;

  return vE;
};

// en grados
export function getInclinacionEje() {
  const naIE = generateRandomNumber(2, 12);
  let iE: number = 0;

  switch (true) {
    case naIE >= 2 && naIE <= 3:
      iE = generateRandomFloat(0, 20);
      break;
    case naIE >= 4 && naIE <= 5:
      iE = 10 + generateRandomFloat(0, 20);
      break;
    case naIE >= 6 && naIE <= 7:
      iE = 20 + generateRandomFloat(0, 20);
      break;
    case naIE >= 8 && naIE <= 9:
      iE = 30 + generateRandomFloat(0, 20);
      break;
    case naIE >= 10 && naIE <= 11:
      iE = 40 + generateRandomFloat(0, 20);
      break;
    case naIE === 12:
      const nnaIE = generateRandomNumber(1, 6);
      switch (true) {
        case nnaIE >= 1 && nnaIE <= 2:
          iE = 50 + generateRandomFloat(0, 20);
          break;
        case nnaIE === 3:
          iE = 60 + generateRandomFloat(0, 20);
          break;
        case nnaIE === 4:
          iE = 70 + generateRandomFloat(0, 20);
          break;
        case nnaIE === 5:
          iE = 80 + generateRandomFloat(0, 10);
          break;
        case nnaIE === 6:
          iE = 90;
          break;
      }
      break;
  }
  return iE;
}

export const getPlanetaryAstrophysicalData = (planetSizeLimitation?: number): AstrophysicalData => {
  const planetSize = habitablePlanetSize(planetSizeLimitation || generateRandomNumber(1, 100));
  const planetRadio = getRadio(planetSize.size);
  const planetDensity = getDensidad();
  const planetMagnetosphere = getMagnetosfera(planetDensity.exp);
  const planetVolume = getVolumen(planetRadio.radio);
  const planetMass = getMasa(planetDensity.val, planetVolume);
  const planetGravity = getGravedad(planetMass, planetRadio.radio);
  const planetEscapeVelocity = getVelocidadEscape(planetMass, planetRadio.radio);
  const planetAxisTilt = getInclinacionEje();

  return {
    axisTilt: planetAxisTilt,
    density: {
      label: planetDensity.exp,
      value: planetDensity.val,
    },
    escapeVelocity: parseFloat(planetEscapeVelocity.toFixed(2)),
    gravity: {
      g: parseFloat(planetGravity.g.toFixed(2)),
      gravityIhMod: planetGravity.gravityIHMod,
    },
    magnetoSphere: parseFloat(planetMagnetosphere.toFixed(2)),
    mass: parseFloat(planetMass.toFixed(2)),
    radio: {
      radioComparedToEarth: planetRadio.radio,
      radioInKMS: planetRadio.radioKMS,
    },
    size: {
      cod: planetSize.size,
      label: planetSize.label,
    },
  };
};
