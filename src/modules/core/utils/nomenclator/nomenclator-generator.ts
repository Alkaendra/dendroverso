import { generateRandomNumber, obtainDataFromTable } from '../utils';
import { generateTableDataByFrequencies } from '../tables-data';

export interface LetterGroup {
  group: string;
  chance: number;
}

export const obtainInitialVocalLength = (word: any, languageVocals: any) => {
  for (let i = 0; i <= word.length; i++) {
    if (!languageVocals.includes(word.charAt(i))) {
      return i;
    }
  }
};

export const obtainInitialConsonantLength: any = (word: any, languageVocals: any) => {
  for (let i = 0; i <= word.length; i++) {
    if (languageVocals.includes(word.charAt(i))) {
      if (i === 0) {
        return obtainInitialVocalLength(word, languageVocals);
      }
      return i;
    }
  }
};

let splittedWord: string[] = [];

export const wordSplitter = (word: any, vocals: any) => {
  if (word.length >= 1) {
    let endOfCharacter = 1;
    endOfCharacter = obtainInitialConsonantLength(word, vocals);
    const letterGroup = word.substring(0, endOfCharacter);
    splittedWord.push(letterGroup);
    const shortedWord = word.substring(letterGroup.length, word.length);
    wordSplitter(shortedWord, vocals);
  }
  return splittedWord;
};

export const sumAllAssocitiveArrayValuesFromObject = (arr: any[]) =>
  Object.keys(arr)
    .map((key: any) => arr[key])
    .reduce((previous, current) => previous + current);

export const sumAllChancesFromLetterGroupArray = (arr: any[]) => arr.map((a: any) => a.chance).reduce((a, b) => a + b);

export const addNewLetterGroupToArray = (letterGroup: string, targetArray: LetterGroup[]) => {
  const finalLetterGroup: LetterGroup = {
    group: letterGroup,
    chance: Object.values(targetArray).some(i => i.group.includes(letterGroup))
      ? Object.values(targetArray).filter(i => i.group.includes(letterGroup))[0].chance + 1
      : 1,
  };
  if (finalLetterGroup.chance > 1) {
    targetArray.splice(
      Object.values(targetArray).indexOf(Object.values(targetArray).filter(i => i.group.includes(letterGroup))[0]),
      1,
      finalLetterGroup,
    );
    return targetArray;
  } else {
    return [...targetArray, finalLetterGroup];
  }
};

export const getInitialCharacters = (
  wordlist: string[],
  languageVocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'Ai', 'y', 'à'],
  composedWordProbability: number,
  composedWordMaxTerms: number,
  languageDiacritics: string[],
  maxLanguageDiacriticsPerWord: number,
  languageDiacriticReversal: string[],
  interfixProbability: number,
  interfixes: string[],
  prefixProbability: number,
  prefixes: string[],
  namesToGenerate: number,
) => {
  let initialVocals: LetterGroup[] = [];
  let bodyVocals: LetterGroup[] = [];
  let finalVocals: LetterGroup[] = [];
  let initialConsonants: LetterGroup[] = [];
  let bodyConsonants: LetterGroup[] = [];
  let finalConsonants: LetterGroup[] = [];
  // console.log(Math.max.apply(Math, languageVocals.map((el) => el.length )));

  wordlist.forEach((word: string) => {
    const sWord = wordSplitter(word, languageVocals);
    sWord.forEach((s, index) => {
      if (index === 0) {
        if (!languageVocals.some(element => s.charAt(0).includes(element))) {
          initialConsonants = addNewLetterGroupToArray(s, initialConsonants);
        } else {
          initialVocals = addNewLetterGroupToArray(s, initialVocals);
        }
      } else if (index === sWord.length - 1) {
        if (!languageVocals.some(element => s.charAt(0).includes(element))) {
          finalConsonants = addNewLetterGroupToArray(s, finalConsonants);
        } else {
          finalVocals = addNewLetterGroupToArray(s, finalVocals);
        }
      } else {
        if (!languageVocals.some(element => s.charAt(0).includes(element))) {
          bodyConsonants = addNewLetterGroupToArray(s, bodyConsonants);
        } else {
          bodyVocals = addNewLetterGroupToArray(s, bodyVocals);
        }
      }
    });

    splittedWord = [];
  });

  const dataTabulator = (dataArray: any) => {
    return Object.keys(dataArray).reduce((arr: any, elem) => {
      const prob = dataArray[elem].chance;
      const probPrev = Number(elem) > 0 ? arr[Number(elem) - 1].max : 0;
      arr[elem] =
        Number(elem) > 0
          ? { group: dataArray[elem].group, min: probPrev + 1, max: prob + probPrev }
          : { group: dataArray[elem].group, min: 0, max: prob };
      return arr;
    }, []);
  };

  const obtainLetterGroupForWord = (data: any) => {
    const randomFactor = generateRandomNumber(0, data[data.length - 1].max);
    let lg = '';
    data.forEach((c: any) => {
      if (randomFactor >= c.min && randomFactor <= c.max) {
        lg = c.group;
      }
    });
    return lg;
  };

  const frequency = {
    initialVocals: dataTabulator(initialVocals),
    initialConsonants: dataTabulator(initialConsonants),
    bodyVocals: dataTabulator(bodyVocals),
    bodyConsonants: dataTabulator(bodyConsonants),
    finalVocals: dataTabulator(finalVocals),
    finalConsonants: dataTabulator(finalConsonants),
  };

  const generatewordWithLanguageFormattedData = (languageData: any, bodyLength: number) => {
    const initialLetterAsVocalProbability = Math.floor(
      (languageData.initialVocals[languageData.initialVocals.length - 1].max * 100) /
        (languageData.initialVocals[languageData.initialVocals.length - 1].max +
          languageData.initialConsonants[languageData.initialConsonants.length - 1].max),
    );
    const finalLetterAsVocalProbability = Math.floor(
      (languageData.finalVocals[languageData.finalVocals.length - 1].max * 100) /
        (languageData.finalVocals[languageData.finalVocals.length - 1].max +
          languageData.finalConsonants[languageData.finalConsonants.length - 1].max),
    );
    let finalWord = '';
    const initialLGRandom = generateRandomNumber(1, 100);
    if (initialLGRandom < initialLetterAsVocalProbability) {
      finalWord += obtainLetterGroupForWord(languageData.initialConsonants);
      finalWord += obtainLetterGroupForWord(languageData.bodyVocals);
    } else {
      finalWord += obtainLetterGroupForWord(languageData.initialVocals);
    }
    for (let i = 0; i <= bodyLength; i++) {
      finalWord += obtainLetterGroupForWord(languageData.bodyConsonants);
      finalWord += obtainLetterGroupForWord(languageData.bodyVocals);
    }
    const finalRandom = generateRandomNumber(1, 100);
    if (finalRandom > finalLetterAsVocalProbability) {
      finalWord += obtainLetterGroupForWord(languageData.finalConsonants);
    } else {
      finalWord += obtainLetterGroupForWord(languageData.bodyConsonants);
      finalWord += obtainLetterGroupForWord(languageData.finalVocals);
    }
    return finalWord;
  };

  const maxLanguageDiacriticsControl = (
    data: any,
    diacritics: string[],
    maxDiacriticsPerWord: number,
    diacriticReversal: string[],
  ) => {
    let correctedData: string[] = [];
    data.forEach((d: any) => {
      let diacriticCount = 0;
      const splittedName = d.split('');
      splittedName.forEach((s: any) => {
        if (diacritics.includes(s)) {
          diacriticCount++;
          if (diacriticCount > maxDiacriticsPerWord) {
            splittedName.splice(splittedName.indexOf(s), 1, diacriticReversal[s]);
          }
        }
      });
      correctedData = [...correctedData, splittedName.join('')];
    });
    return correctedData;
  };

  const obtainComposedWord = (
    composedWordMaxTerms: number,
    composedWordProbability: number,
    frequencies: any,
    interfix: string,
    prefix: string,
  ) => {
    let finalWord = `${prefix}${generatewordWithLanguageFormattedData(frequencies, 2)}`;
    if (interfix !== '') {
      finalWord = `${prefix}${generatewordWithLanguageFormattedData(
        frequencies,
        1,
      )} ${interfix} ${generatewordWithLanguageFormattedData(frequencies, 1)}`;
    } else {
      let randomComposendWord = generateRandomNumber(1, 100);
      if (randomComposendWord <= composedWordProbability) {
        for (let i = 1; i < composedWordMaxTerms; i++) {
          finalWord += ` ${generatewordWithLanguageFormattedData(frequencies, 1)}`;
        }
      }
    }
    return finalWord;
  };

  const generateManyNames = (namesNumber: number) => {
    let names: string[] = [];
    let interfix: string = '';
    let prefix: string = '';
    for (let i = 0; i <= namesNumber; i++) {
      if (prefixes) {
        let randomPrefixAppearance = generateRandomNumber(1, 100);
        prefix =
          randomPrefixAppearance <= prefixProbability
            ? obtainDataFromTable(generateTableDataByFrequencies(prefixes))
            : '';
      }
      if (interfixes) {
        let randomInterfixAppearance = generateRandomNumber(1, 100);
        interfix =
          randomInterfixAppearance <= interfixProbability
            ? obtainDataFromTable(generateTableDataByFrequencies(interfixes))
            : '';
      }
      names = [
        ...names,
        obtainComposedWord(composedWordMaxTerms, composedWordProbability, frequency, interfix, prefix),
      ];
    }
    return maxLanguageDiacriticsControl(
      names,
      languageDiacritics,
      maxLanguageDiacriticsPerWord,
      languageDiacriticReversal,
    );
  };

  return generateManyNames(namesToGenerate);
};

export const generateRandomNames = (language: any, namesToGenerate: number) => {
  return getInitialCharacters(
    language.wordlist,
    language.vocals,
    language.composedWordProbability,
    language.composedWordMaxTerms,
    language.diacritics,
    language.diacriticsMaxPerWord,
    language.diacriticsReversal,
    language.interfixProbability,
    language.interfixes,
    language.prefixProbability,
    language.prefixes,
    namesToGenerate,
  );
};
