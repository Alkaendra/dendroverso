import * as estandar from './nomenclator-generico';
import * as saomico from './nomenclator-saomico';
import * as ubasharida from './nomenclator-ubasharida';
import { generateRandomNumber } from '../utils';

export function getEstructuraCV() {
  const aleatorioInicialCV = generateRandomNumber(1, 20);
  let estructuraCV: string;

  if (aleatorioInicialCV > 10) {
    estructuraCV = 'VCV';
  } else {
    estructuraCV = 'CV';
  }

  const aleatorioCV = generateRandomNumber(0, 3);

  for (let i = 1; i <= aleatorioCV; i++) {
    if (i === aleatorioCV) {
      const aleatorio = generateRandomNumber(1, 100);
      if (aleatorio > 50) {
        estructuraCV += 'CV';
      } else {
        estructuraCV += 'CVC';
      }
    } else {
      estructuraCV += 'CV';
    }
  }

  return estructuraCV;
}

export function getNomen(idioma: any) {
  const estructuraCV = getEstructuraCV();
  let lengua: any;
  let nomen: any;

  switch (true) {
    case idioma === 'ubasharida':
      lengua = ubasharida;
      break;
    case idioma === 'saomico':
      lengua = saomico;
      break;
    default:
      lengua = estandar;
      break;
  }

  const CoV = estructuraCV.split('');

  for (let k = 0; k < estructuraCV.length; k++) {
    if (k === 0) {
      if (CoV[k] === 'C') {
        nomen = lengua.obtenerConsonanteInicial();
      } else {
        nomen = lengua.obtenerVocalInicial();
      }
    } else if (k !== estructuraCV.length - 1) {
      if (CoV[k] === 'C') {
        nomen += lengua.obtenerConsonanteCuerpo();
      } else {
        nomen += lengua.obtenerVocalCuerpo();
      }
    } else {
      if (CoV[k] === 'C') {
        nomen += lengua.obtenerConsonanteFinal();
      } else {
        nomen += lengua.obtenerVocalFinal();
      }
    }
  }

  return nomen;
}
