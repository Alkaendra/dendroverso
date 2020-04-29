import { lenguaCauriana } from './nomenclator-cauriano';
import { lenguaPuiwa } from './nomenclator-puiwa';
import { lenguaUbasharida } from './nomenclator-ubasharida';
import { lenguaTaodara } from './nomenclator-saomico';

export const getLanguage = {
  DDM: lenguaPuiwa,
  LCA: lenguaCauriana,
  TAO: lenguaTaodara,
  UBS: lenguaUbasharida,
};
