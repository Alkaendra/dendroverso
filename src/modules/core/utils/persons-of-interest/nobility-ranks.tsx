export const nobilityRanks = [
  {
    level: 1,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 0,
      instinctMod: 1,
      mindMod: 1,
      passionMod: 0,
      willMod: 1,
    },
    powerMods: {
      diplomaticMod: 0,
      economicMod: 1,
      militaryMod: -2,
      politicalMod: -1,
      socialMod: 1,
    },
    skillsMods: {
      artisticalMod: 0,
      phisycalMod: 1,
      intelectualMod: 0,
      martialMod: 1,
      nootericMod: 0,
      socialMod: 1,
      technicalMod: 0,
    },
    patrimonialBelongingsMods: [
      {
        max: 50,
        min: 1,
        valueToReturn: 'Básico',
      },
      {
        max: 80,
        min: 51,
        valueToReturn: 'Rico',
      },
      {
        max: 100,
        min: 81,
        valueToReturn: 'Muy Rico',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 20,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 90,
          min: 21,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Élite',
        },
      ],
      weapons: [
        {
          max: 20,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 90,
          min: 21,
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
          max: 70,
          min: 1,
          valueToReturn: 'Estándar',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Militar',
        },
      ],
    },
  },
  {
    level: 2,
    personalTraitsMods: {
      emotionMod: 1,
      fitMod: 0,
      instinctMod: 2,
      mindMod: 1,
      passionMod: 0,
      willMod: 2,
    },
    powerMods: {
      diplomaticMod: 2,
      economicMod: 2,
      militaryMod: 0,
      politicalMod: 1,
      socialMod: 2,
    },
    skillsMods: {
      artisticalMod: 1,
      phisycalMod: 1,
      intelectualMod: 0,
      martialMod: 1,
      nootericMod: 0,
      socialMod: 2,
      technicalMod: 0,
    },
    patrimonialBelongingsMods: [
      {
        max: 70,
        min: 1,
        valueToReturn: 'Rico',
      },
      {
        max: 100,
        min: 71,
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
          valueToReturn: 'Élite',
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
          max: 70,
          min: 1,
          valueToReturn: 'Militar',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Élite',
        },
      ],
    },
  },
  {
    level: 3,
    personalTraitsMods: {
      emotionMod: 1,
      fitMod: 0,
      instinctMod: 2,
      mindMod: 2,
      passionMod: 0,
      willMod: 2,
    },
    powerMods: {
      diplomaticMod: 2,
      economicMod: 2,
      militaryMod: 0,
      politicalMod: 3,
      socialMod: 3,
    },
    skillsMods: {
      artisticalMod: 1,
      phisycalMod: 0,
      intelectualMod: 2,
      martialMod: 0,
      nootericMod: 0,
      socialMod: 2,
      technicalMod: 0,
    },
    patrimonialBelongingsMods: [
      {
        max: 85,
        min: 1,
        valueToReturn: 'Muy Rico',
      },
      {
        max: 100,
        min: 86,
        valueToReturn: 'Interplanetario',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Elite',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Épico',
        },
      ],
      weapons: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Épico',
        },
      ],
      implants: [
        {
          max: 90,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 91,
          valueToReturn: 'Épico',
        },
      ],
    },
  },
  {
    level: 4,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 1,
      instinctMod: 3,
      mindMod: 2,
      passionMod: 0,
      willMod: 3,
    },
    powerMods: {
      diplomaticMod: 4,
      economicMod: 3,
      militaryMod: 1,
      politicalMod: 3,
      socialMod: 4,
    },
    skillsMods: {
      artisticalMod: 2,
      phisycalMod: 0,
      intelectualMod: 2,
      martialMod: 0,
      nootericMod: 0,
      socialMod: 4,
      technicalMod: 0,
    },
    patrimonialBelongingsMods: [
      {
        max: 65,
        min: 1,
        valueToReturn: 'Interplanetario',
      },
      {
        max: 100,
        min: 66,
        valueToReturn: 'Nacional',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 70,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Épico',
        },
      ],
      weapons: [
        {
          max: 70,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 71,
          valueToReturn: 'Épico',
        },
      ],
      implants: [
        {
          max: 80,
          min: 1,
          valueToReturn: 'Élite',
        },
        {
          max: 100,
          min: 81,
          valueToReturn: 'Épico',
        },
      ],
    },
  },
  {
    level: 5,
    personalTraitsMods: {
      emotionMod: 0,
      fitMod: 0,
      instinctMod: 4,
      mindMod: 3,
      passionMod: 0,
      willMod: 4,
    },
    powerMods: {
      diplomaticMod: 4,
      economicMod: 4,
      militaryMod: 2,
      politicalMod: 4,
      socialMod: 4,
    },
    skillsMods: {
      artisticalMod: 2,
      phisycalMod: 0,
      intelectualMod: 3,
      martialMod: 0,
      nootericMod: 0,
      socialMod: 4,
      technicalMod: 0,
    },
    patrimonialBelongingsMods: [
      {
        max: 95,
        min: 1,
        valueToReturn: 'Nacional',
      },
      {
        max: 100,
        min: 66,
        valueToReturn: 'Internacional',
      },
    ],
    equipmentMods: {
      armor: [
        {
          max: 98,
          min: 1,
          valueToReturn: 'Épica',
        },
        {
          max: 100,
          min: 99,
          valueToReturn: 'Legendaria',
        },
      ],
      weapons: [
        {
          max: 98,
          min: 1,
          valueToReturn: 'Épica',
        },
        {
          max: 100,
          min: 99,
          valueToReturn: 'Legenderia',
        },
      ],
      implants: [
        {
          max: 98,
          min: 1,
          valueToReturn: 'Épico',
        },
        {
          max: 100,
          min: 99,
          valueToReturn: 'Legendario',
        },
      ],
    },
  },
];
