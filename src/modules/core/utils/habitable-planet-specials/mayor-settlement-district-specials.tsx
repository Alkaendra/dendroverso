import {
  MayorSettlementDevelopmentProduction,
  SettlementResourceProduction,
} from '../../../admin/components/admin-commons/admin-models/settlement.model';
import { DynamicDataTableObject } from '../tables-data';

export interface MayorSettlementDistricSpecial {
  development: MayorSettlementDevelopmentProduction;
  effect: string; // Negative, neutral or positive
  label: string;
  maintenance: SettlementResourceProduction;
  sub_types?: string[]; // Special sub varieties
}

export const mayorSettlementDistrictSpecialsMaximun: DynamicDataTableObject[] = [
  {
    dataToSend: 1,
    freq: 'mayor',
  },
  {
    dataToSend: 2,
    freq: 'minor',
  },
  {
    dataToSend: 3,
    freq: 'veryRare',
  },
];

export const mayorSettlementDistrictSpecials: DynamicDataTableObject[] = [
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3],
        cultural: 0,
        economical: [0.1, 0.3, '-'],
        industrial: 0,
        martial: 0,
        population: 0,
        technological: [0.1, 0.3],
      },
      effect: 'Positive',
      label: 'Eco Friendly',
      maintenance: {
        edible: [0.1, 0.3, '-'],
        energetical: [0.1, 0.3, '-'],
        industrial: [0.1, 0.3, '-'],
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3],
        cultural: 0,
        economical: [0.1, 0.3],
        industrial: [0.5, 1],
        martial: 0,
        population: 0,
        technological: [0.1, 0.3],
      },
      effect: 'Positive',
      label: 'Efficient Labor Force',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.3],
        industrial: [0.1, 0.3],
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: 0,
        industrial: [0.1, 1, '-'],
        martial: 0,
        population: 0,
        technological: [0.1, 0.3, '-'],
      },
      label: 'Energy Supply Fluctuations',
      effect: 'Negative',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.3],
        industrial: [0.1, 0.3],
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3],
        cultural: [1, 2],
        economical: [0.1, 0.3],
        industrial: 0,
        martial: 0,
        population: 0,
        technological: 0,
      },
      effect: 'Positive',
      label: 'Famed Cultural Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: [1.5, 2.5],
        industrial: 0,
        martial: 0,
        population: 0,
        technological: 0,
      },
      effect: 'Positive',
      label: 'Famed Economical Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: [0.1, 0.3],
        industrial: [1, 2],
        martial: 0,
        population: 0,
        technological: [0.1, 0.3],
      },
      effect: 'Positive',
      label: 'Famed Industrial Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: [1, 2],
        population: 0,
        technological: [0.1, 0.3],
      },
      effect: 'Positive',
      label: 'Famed Military Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: 0,
        population: 0,
        technological: [1, 2],
      },
      effect: 'Positive',
      label: 'Famed Research Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: [1, 2],
        industrial: 0,
        martial: 0,
        population: [0.1, 0.5],
        technological: 0,
      },
      effect: 'Positive',
      label: 'Famed Touristic Center',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: [1, 2],
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: 0,
        population: 0,
        technological: 0,
      },
      effect: 'Positive',
      label: 'High Civical Ethic',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.5, 0.7],
        cultural: [0.1, 0.3],
        economical: 0,
        industrial: 0,
        martial: 0,
        population: [1, 2],
        technological: 0,
      },
      effect: 'Neutral',
      label: 'High Urbanistic Development',
      maintenance: {
        edible: [0.1, 0.3],
        energetical: [0.1, 0.3],
        industrial: [0.1, 0.3],
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3, '-'],
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: 0,
        population: [0.1, 0.3, '-'],
        technological: 0,
      },
      effect: 'Negative',
      label: 'High Pollution',
      maintenance: {
        edible: [0.1, 0.3],
        energetical: [0.1, 0.3],
        industrial: 0,
      },
      sub_types: ['Atmospheric', 'Hydric', 'Soil'],
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: 0,
        economical: [1, 2, '-'],
        industrial: [0.1, 1, '-'],
        martial: 0,
        population: [0.1, 0.5, '-'],
        technological: 0,
      },
      effect: 'Negative',
      label: 'Infestation',
      maintenance: {
        edible: [0.1, 0.5],
        energetical: 0,
        industrial: [0.1, 0.5],
      },
      sub_types: ['Invasive biota', 'Local Fauna', 'Local Flora', 'Local fungi', 'Local Microbia'],
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.3, 1, '-'],
        cultural: 0,
        economical: [0.3, 0.5, '-'],
        industrial: [0.3, 0.5, '-'],
        martial: 0,
        population: 0,
        technological: 0,
      },
      effect: 'Negative',
      label: 'Mayor Strike',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.5],
        industrial: 0,
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3, '-'],
        cultural: 0,
        economical: 0,
        industrial: 0,
        martial: 0,
        population: [0.5, 1],
        technological: 0,
      },
      effect: 'Neutral',
      label: 'Partially Underground',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.3],
        industrial: [0.1, 0.3],
      },
    },
    freq: 'minor',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3, '-'],
        cultural: [0.1, 1, '-'],
        economical: [0.5, 1.5, '-'],
        industrial: [0.1, 1, '-'],
        martial: 0,
        population: [1, 2, '-'],
        technological: 0,
      },
      effect: 'Negative',
      label: 'Plague',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
      sub_types: ['Bacterial', 'Nanoid', 'Prion', 'Other', 'Viral'],
    },
    freq: 'rare',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.3, 0.5, '-'],
        cultural: [0.1, 0.3, '-'],
        economical: 0,
        industrial: 0,
        martial: 0,
        population: 0,
        technological: [0.1, 0.3, '-'],
      },
      effect: 'Neutral',
      label: 'Proselitism',
      maintenance: {
        edible: 0,
        energetical: 0,
        industrial: 0,
      },
    },
    freq: 'rare',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.1, 0.3, '-'],
        cultural: [0.1, 0.3, '-'],
        economical: [0.1, 0.3, '-'],
        industrial: 0,
        martial: 0,
        population: 0,
        technological: 0,
      },
      effect: 'Negative',
      label: 'Raising Discontent',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.5],
        industrial: 0,
      },
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: 0,
        cultural: [0.1, 1],
        economical: [0.1, 0.3],
        industrial: 0,
        martial: 0,
        population: 0,
        technological: [0.1, 0.3],
      },
      effect: 'Neutral',
      label: 'Ruins',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.5],
        industrial: 0,
      },
      sub_types: ['Derelict', 'Old Battle Remains', 'Primitive Native Settlement'],
    },
    freq: 'low',
  },
  {
    dataToSend: {
      development: {
        administrative: [0.3, 0.5, '-'],
        cultural: [0.1, 1],
        economical: [0.3, 0.5],
        industrial: 0,
        martial: 0,
        population: [0.3, 0.5, '-'],
        technological: [0.3, 0.5],
      },
      effect: 'Neutral',
      label: 'Xeno Ruins',
      maintenance: {
        edible: 0,
        energetical: [0.1, 0.5],
        industrial: 0,
      },
    },
    freq: 'rare',
  },
];
