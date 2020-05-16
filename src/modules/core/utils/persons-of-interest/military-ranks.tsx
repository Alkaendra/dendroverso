export const militaryRanks = [
  {
    level: 1,
    personalTraitsMods: {
      emotionMod: -1,
      fitMod: 2,
      instinctMod: 2,
      mindMod: 0,
      passionMod: 0,
      willMod: 1,
    },
    powerMods: {
      diplomaticMod: -1,
      economicMod: -1,
      militaryMod: -2,
      politicalMod: -2,
      socialMod: -1,
    },
    skillsMods: {
      artisticalMod: -2,
      phisycalMod: 2,
      intelectualMod: -1,
      martialMod: 2,
      nootericMod: 0,
      socialMod: -1,
      technicalMod: 1,
    },
    patrimonialBelongingsMods: [
      {
        max: 70,
        min: 1,
        valueToReturn: 'Pobre',
      },
      {
        max: 95,
        min: 71,
        valueToReturn: 'Básico',
      },
      {
        max: 100,
        min: 96,
        valueToReturn: 'Rico',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 70,
          min: 1,
          valueToReturn: 'Rudimentaria',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Estándar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Militar',
        },
      ],
      weapons: [
        {
          max: 20,
          min: 1,
          valueToReturn: 'Rudimentaria',
        },
        {
          max: 90,
          min: 21,
          valueToReturn: 'Estándar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Militar',
        },
      ],
      implants: [
        {
          max: 70,
          min: 1,
          valueToReturn: 'Rudimentario',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Estándar',
        },
      ],
    },
  },
  {
    level: 2,
    personalTraitsMods: {
      emotionMod: -1,
      fitMod: 2,
      instinctMod: 2,
      mindMod: 0,
      passionMod: 0,
      willMod: 1,
    },
    powerMods: {
      diplomaticMod: 0,
      economicMod: 0,
      militaryMod: 0,
      politicalMod: -1,
      socialMod: 0,
    },
    skillsMods: {
      artisticalMod: -2,
      phisycalMod: 2,
      intelectualMod: 0,
      martialMod: 2,
      nootericMod: 0,
      socialMod: 0,
      technicalMod: 1,
    },
    patrimonialBelongingsMods: [
      {
        max: 70,
        min: 1,
        valueToReturn: 'Básico',
      },
      {
        max: 95,
        min: 71,
        valueToReturn: 'Rico',
      },
      {
        max: 100,
        min: 96,
        valueToReturn: 'Muy Rico',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 50,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 100,
          min: 51,
          valueToReturn: 'Militar',
        },
      ],
      weapons: [
        {
          max: 50,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 100,
          min: 51,
          valueToReturn: 'Militar',
        },
      ],
      implants: [
        {
          max: 70,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 70,
          min: 1,
          valueToReturn: 'Militar',
        },
      ],
    },
  },
  {
    level: 3,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 1,
      instinctMod: 1,
      mindMod: 1,
      passionMod: 0,
      willMod: 2,
    },
    powerMods: {
      diplomaticMod: 0,
      economicMod: 0,
      militaryMod: 1,
      politicalMod: 0,
      socialMod: 0,
    },
    skillsMods: {
      artisticalMod: -2,
      phisycalMod: 1,
      intelectualMod: 1,
      martialMod: 1,
      nootericMod: 0,
      socialMod: 0,
      technicalMod: 1,
    },
    patrimonialBelongingsMods: [
      {
        max: 15,
        min: 1,
        valueToReturn: 'Básico',
      },
      {
        max: 95,
        min: 16,
        valueToReturn: 'Rico',
      },
      {
        max: 100,
        min: 96,
        valueToReturn: 'Muy Rico',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Elite',
        },
      ],
      weapons: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Élite',
        },
      ],
      implants: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Élite',
        },
      ],
    },
  },
  {
    level: 4,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 1,
      instinctMod: 1,
      mindMod: 2,
      passionMod: 0,
      willMod: 2,
    },
    powerMods: {
      diplomaticMod: 1,
      economicMod: 1,
      militaryMod: 2,
      politicalMod: 1,
      socialMod: 1,
    },
    skillsMods: {
      artisticalMod: -2,
      phisycalMod: 1,
      intelectualMod: 1,
      martialMod: 1,
      nootericMod: 0,
      socialMod: 1,
      technicalMod: 1,
    },
    patrimonialBelongingsMods: [
      {
        max: 65,
        min: 1,
        valueToReturn: 'Rico',
      },
      {
        max: 100,
        min: 66,
        valueToReturn: 'Muy Rico',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 50,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 51,
          valueToReturn: 'Elite',
        },
      ],
      weapons: [
        {
          max: 50,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 51,
          valueToReturn: 'Élite',
        },
      ],
      implants: [
        {
          max: 50,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 51,
          valueToReturn: 'Élite',
        },
      ],
    },
  },
  {
    level: 5,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 0,
      instinctMod: 1,
      mindMod: 2,
      passionMod: 0,
      willMod: 3,
    },
    powerMods: {
      diplomaticMod: 2,
      economicMod: 2,
      militaryMod: 3,
      politicalMod: 2,
      socialMod: 2,
    },
    skillsMods: {
      artisticalMod: -2,
      phisycalMod: 0,
      intelectualMod: 1,
      martialMod: 2,
      nootericMod: 0,
      socialMod: 2,
      technicalMod: 1,
    },
    patrimonialBelongingsMods: [
      {
        max: 95,
        min: 1,
        valueToReturn: 'Muy Rico',
      },
      {
        max: 100,
        min: 96,
        valueToReturn: 'Interplanetario',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 95,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 96,
          valueToReturn: 'Épica',
        },
      ],
      weapons: [
        {
          max: 95,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 96,
          valueToReturn: 'Épica',
        },
      ],
      implants: [
        {
          max: 95,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 96,
          valueToReturn: 'Épico',
        },
      ],
    },
  },
];
