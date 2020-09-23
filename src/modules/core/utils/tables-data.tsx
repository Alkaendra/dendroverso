export const dataValuesToGenerateTableRanges: any = {
  veryRare: 1,
  rare: 2,
  minor: 5,
  low: 15,
  normal: 20,
  relevant: 30,
  high: 50,
  mayor: 70,
  maximum: 100,
};

export const cosa = ['veryRare', 'veryRare', 'rare', 'minor', 'minor', 'normal', 'relevant', 'relevant'];

export const reducingCosa = (data: string[]) => {
  const toSend = data
    .map((a: any) => dataValuesToGenerateTableRanges[a])
    .reduce((nuevoArray, valor, index, viejoArray) => {
      if (index === 0) {
        nuevoArray = [
          ...nuevoArray,
          {
            min: 1,
            max: valor,
          },
        ];
        return nuevoArray;
      } else {
        nuevoArray = [
          ...nuevoArray,
          {
            min: [...viejoArray].splice(0, index).reduce((a, s) => a + s) + 1,
            max: valor + [...viejoArray].splice(0, index).reduce((a, s) => a + s),
          },
        ];
        return nuevoArray;
      }
    }, []);
  return toSend;
};
