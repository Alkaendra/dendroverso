export interface DynamicDataTableObject {
  dataToSend: {} | any;
  freq: string;
}

export const dataValuesToGenerateTableRanges: any = {
  veryRare: 1,
  rare: 2,
  minor: 5,
  veryLow: 10,
  low: 15,
  normal: 20,
  relevant: 30,
  high: 50,
  mayor: 70,
  maximum: 100,
};

export const cosa = [
  {
    dataToSend: 'agua',
    freq: 'high',
  },
  {
    dataToSend: 'fanta',
    freq: 'normal',
  },
];

export const generateTableDataByFrequencies = (data: any[]) => {
  const toSend = data
    .map((a: any) => ({ dataToSend: a.dataToSend, freq: dataValuesToGenerateTableRanges[a.freq] }))
    .reduce((nuevoArray: any, valor, index) => {
      if (index === 0) {
        nuevoArray = [
          ...nuevoArray,
          {
            min: 1,
            max: valor.freq,
            valueToReturn: valor.dataToSend,
          },
        ];
        return nuevoArray;
      } else if (index === 1) {
        nuevoArray = [
          ...nuevoArray,
          {
            min: nuevoArray[0].max + 1,
            max: nuevoArray[0].max + valor.freq,
            valueToReturn: valor.dataToSend,
          },
        ];
        return nuevoArray;
      } else {
        nuevoArray = [
          ...nuevoArray,
          {
            min: nuevoArray[index - 1].max + 1,
            max: valor.freq + nuevoArray[index - 1].max + 1,
            valueToReturn: valor.dataToSend,
          },
        ];
        return nuevoArray;
      }
    }, []);
  return toSend;
};
