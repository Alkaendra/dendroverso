import { generateRandomNumber } from '../utils';

export function getVocalInicial() {
  const viale = generateRandomNumber(0, 100);
  let vI;

  switch (true) {
    case viale <= 20:
      vI = 'A';
      break;
    case viale >= 21 && viale <= 40:
      vI = 'E';
      break;
    case viale >= 41 && viale <= 60:
      vI = 'I';
      break;
    case viale >= 61 && viale <= 80:
      vI = 'O';
      break;
    case viale >= 81:
      vI = 'U';
      break;
  }

  const vocDobAle = generateRandomNumber(0, 100); // Prob de la que Vocal inicial sea doble
  if (vocDobAle > 70) {
    const vocDob = generateRandomNumber(0, 100);

    switch (true) {
      case vocDob <= 40:
        vI += 'a';
        break;
      case vocDob >= 41 && vocDob <= 60:
        vI += 'e';
        break;
      case vocDob >= 61 && vocDob <= 80:
        vI += 'i';
        break;
      case vocDob >= 81 && vocDob <= 90:
        vI += 'o';
        break;
      case vocDob >= 910:
        vI += 'u';
        break;
    }
  }

  return vI;
}

export function getVocal() {
  const vale = generateRandomNumber(0, 100);
  let v;

  switch (true) {
    case vale <= 20:
      v = 'a';
      break;
    case vale >= 21 && vale <= 40:
      v = 'e';
      break;
    case vale >= 41 && vale <= 60:
      v = 'i';
      break;
    case vale >= 61 && vale <= 80:
      v = 'o';
      break;
    case vale >= 81:
      v = 'u';
      break;
  }

  const vocDobAle = generateRandomNumber(0, 100); // Prob de la que Consonante sea doble
  if (vocDobAle > 70) {
    const vocDob = generateRandomNumber(0, 100);

    switch (true) {
      case vocDob <= 40:
        v += 'a';
        break;
      case vocDob >= 41 && vocDob <= 60:
        v += 'e';
        break;
      case vocDob >= 61 && vocDob <= 80:
        v += 'i';
        break;
      case vocDob >= 81 && vocDob <= 90:
        v += 'o';
        break;
      case vocDob >= 91:
        v += 'u';
        break;
    }
  }

  return v;
}

export function getVocalFinal() {
  const vfale = generateRandomNumber(0, 100);
  let vf;

  switch (true) {
    case vfale <= 20:
      vf = 'a';
      break;
    case vfale >= 21 && vfale <= 40:
      vf = 'e';
      break;
    case vfale >= 41 && vfale <= 60:
      vf = 'i';
      break;
    case vfale >= 61 && vfale <= 80:
      vf = 'o';
      break;
    case vfale >= 81:
      vf = 'u';
      break;
  }

  return vf;
}

export function getConsonanteInicial() {
  const ciale = generateRandomNumber(0, 100);
  let cI;

  switch (true) {
    case ciale <= 4:
      cI = 'B';
      break;
    case ciale >= 5 && ciale <= 9:
      cI = 'C';
      break;
    case ciale >= 10 && ciale <= 15:
      cI = 'D';
      break;
    case ciale >= 16 && ciale <= 18:
      cI = 'F';
      break;
    case ciale >= 19 && ciale <= 23:
      cI = 'G';
      break;
    case ciale >= 24 && ciale <= 28:
      cI = 'H';
      break;
    case ciale >= 29 && ciale <= 33:
      cI = 'J';
      break;
    case ciale >= 32 && ciale <= 36:
      cI = 'K';
      break;
    case ciale >= 37 && ciale <= 43:
      cI = 'L';
      break;
    case ciale >= 44 && ciale <= 46:
      cI = 'Ll';
      break;
    case ciale >= 47 && ciale <= 54:
      cI = 'M';
      break;
    case ciale >= 55 && ciale <= 60:
      cI = 'N';
      break;
    case ciale >= 61 && ciale <= 63:
      cI = 'Ñ';
      break;
    case ciale >= 64 && ciale <= 69:
      cI = 'P';
      break;
    case ciale >= 70 && ciale <= 74:
      cI = 'Q';
      break;
    case ciale >= 75 && ciale <= 80:
      cI = 'R';
      break;
    case ciale >= 81 && ciale <= 85:
      cI = 'S';
      break;
    case ciale >= 86 && ciale <= 90:
      cI = 'T';
      break;
    case ciale >= 91 && ciale <= 94:
      cI = 'V';
      break;
    case ciale >= 95 && ciale <= 96:
      cI = 'W';
      break;
    case ciale === 97:
      cI = 'X';
      break;
    case ciale === 98:
      cI = 'Y';
      break;
    case ciale >= 99:
      cI = 'Z';
      break;
  }

  const conDobAle = generateRandomNumber(0, 100); // Prob de la que Consonante inicial sea doble
  if (conDobAle > 70) {
    const conDob = generateRandomNumber(0, 100);

    switch (true) {
      case conDob <= 40:
        cI += 'h';
        break;
      case conDob >= 41 && conDob <= 65:
        cI += 'r';
        break;
      case conDob >= 76 && conDob <= 80:
        cI += 'l';
        break;
      case conDob >= 81 && conDob <= 85:
        cI += 'k';
        break;
      case conDob >= 86 && conDob <= 90:
        cI += 'q';
        break;
      case conDob >= 91 && conDob <= 95:
        cI += 'k';
        break;
      case conDob >= 96:
        cI += 'q';
        break;
    }
  }

  const conTriAle = generateRandomNumber(0, 100); // Prob de la que Consonante inicial sea triple
  if (conTriAle > 95) {
    const conTri = generateRandomNumber(0, 100);

    switch (true) {
      case conTri <= 40:
        cI += 'h';
        break;
      case conTri >= 41 && conTri <= 65:
        cI += 'r';
        break;
      case conTri >= 76 && conTri <= 80:
        cI += 'l';
        break;
      case conTri >= 81 && conTri <= 85:
        cI += 'k';
        break;
      case conTri >= 86 && conTri <= 90:
        cI += 'q';
        break;
      case conTri >= 91 && conTri <= 95:
        cI += 'z';
        break;
      case conTri >= 96:
        cI += 's';
        break;
    }
  }

  return cI;
}

export function getConsonante() {
  const cale = generateRandomNumber(0, 100);
  let c;

  switch (true) {
    case cale <= 4:
      c = 'b';
      break;
    case cale >= 5 && cale <= 9:
      c = 'c';
      break;
    case cale >= 10 && cale <= 15:
      c = 'd';
      break;
    case cale >= 16 && cale <= 18:
      c = 'f';
      break;
    case cale >= 19 && cale <= 23:
      c = 'g';
      break;
    case cale >= 24 && cale <= 28:
      c = 'h';
      break;
    case cale >= 29 && cale <= 33:
      c = 'j';
      break;
    case cale >= 32 && cale <= 36:
      c = 'k';
      break;
    case cale >= 37 && cale <= 43:
      c = 'l';
      break;
    case cale >= 44 && cale <= 46:
      c = 'll';
      break;
    case cale >= 47 && cale <= 54:
      c = 'm';
      break;
    case cale >= 55 && cale <= 60:
      c = 'n';
      break;
    case cale >= 61 && cale <= 63:
      c = 'ñ';
      break;
    case cale >= 64 && cale <= 69:
      c = 'p';
      break;
    case cale >= 70 && cale <= 74:
      c = 'q';
      break;
    case cale >= 75 && cale <= 80:
      c = 'r';
      break;
    case cale >= 81 && cale <= 85:
      c = 's';
      break;
    case cale >= 86 && cale <= 90:
      c = 't';
      break;
    case cale >= 91 && cale <= 94:
      c = 'v';
      break;
    case cale >= 95 && cale <= 96:
      c = 'w';
      break;
    case cale === 97:
      c = 'x';
      break;
    case cale === 98:
      c = 'y';
      break;
    case cale >= 99:
      c = 'z';
      break;
  }

  const conDobAle = generateRandomNumber(0, 100); // Prob de la que Consonante sea doble
  if (conDobAle > 75) {
    const conDob = generateRandomNumber(0, 100);

    switch (true) {
      case conDob <= 40:
        c += 'h';
        break;
      case conDob >= 41 && conDob <= 65:
        c += 'r';
        break;
      case conDob >= 76 && conDob <= 80:
        c += 'l';
        break;
      case conDob >= 81 && conDob <= 85:
        c += 'k';
        break;
      case conDob >= 86 && conDob <= 90:
        c += 'q';
        break;
      case conDob >= 91 && conDob <= 95:
        c += 'z';
        break;
      case conDob >= 96:
        c += 's';
        break;
    }
  }

  const conTriAle = generateRandomNumber(0, 100); // Prob de la que Consonantesea triple
  if (conTriAle > 95) {
    const conTri = generateRandomNumber(0, 100);

    switch (true) {
      case conTri <= 40:
        c += 'h';
        break;
      case conTri >= 41 && conTri <= 65:
        c += 'r';
        break;
      case conTri >= 76 && conTri <= 80:
        c += 'l';
        break;
      case conTri >= 81 && conTri <= 85:
        c += 'k';
        break;
      case conTri >= 86 && conTri <= 90:
        c += 'q';
        break;
      case conTri >= 91 && conTri <= 95:
        c += 'z';
        break;
      case conTri >= 96:
        c += 's';
        break;
    }
  }

  return c;
}

export function getConsonanteFinal() {
  const cale = generateRandomNumber(0, 100);
  let c;

  switch (true) {
    case cale <= 4:
      c = 'b';
      break;
    case cale >= 5 && cale <= 9:
      c = 'c';
      break;
    case cale >= 10 && cale <= 15:
      c = 'd';
      break;
    case cale >= 16 && cale <= 18:
      c = 'f';
      break;
    case cale >= 19 && cale <= 23:
      c = 'g';
      break;
    case cale >= 24 && cale <= 28:
      c = 'h';
      break;
    case cale >= 29 && cale <= 33:
      c = 'j';
      break;
    case cale >= 32 && cale <= 36:
      c = 'k';
      break;
    case cale >= 37 && cale <= 43:
      c = 'l';
      break;
    case cale >= 44 && cale <= 46:
      c = 'll';
      break;
    case cale >= 47 && cale <= 54:
      c = 'm';
      break;
    case cale >= 55 && cale <= 63:
      c = 'n';
      break;
    case cale >= 64 && cale <= 69:
      c = 'p';
      break;
    case cale >= 70 && cale <= 74:
      c = 'q';
      break;
    case cale >= 75 && cale <= 80:
      c = 'r';
      break;
    case cale >= 81 && cale <= 85:
      c = 's';
      break;
    case cale >= 86 && cale <= 90:
      c = 't';
      break;
    case cale >= 91 && cale <= 94:
      c = 'v';
      break;
    case cale >= 95 && cale <= 96:
      c = 'w';
      break;
    case cale === 97:
      c = 'x';
      break;
    case cale === 98:
      c = 'y';
      break;
    case cale >= 99:
      c = 'z';
      break;
  }

  const conDobAle = generateRandomNumber(0, 100); // Prob de la que Consonante sea doble
  if (conDobAle > 95) {
    const conDob = generateRandomNumber(0, 100);

    switch (true) {
      case conDob <= 40:
        c += 'h';
        break;
      case conDob >= 41 && conDob <= 65:
        c += 'r';
        break;
      case conDob >= 76 && conDob <= 80:
        c += 'l';
        break;
      case conDob >= 81 && conDob <= 85:
        c += 'k';
        break;
      case conDob >= 86 && conDob <= 90:
        c += 'q';
        break;
      case conDob >= 91 && conDob <= 95:
        c += 's';
        break;
      case conDob >= 96:
        c += 'z';
        break;
    }
  }

  const conTriAle = generateRandomNumber(0, 100); // Prob de la que Consonantesea triple
  if (conTriAle > 99) {
    const conTri = generateRandomNumber(0, 100);

    switch (true) {
      case conTri <= 40:
        c += 'h';
        break;
      case conTri >= 41 && conTri <= 65:
        c += 'r';
        break;
      case conTri >= 76 && conTri <= 80:
        c += 'l';
        break;
      case conTri >= 81 && conTri <= 85:
        c += 'k';
        break;
      case conTri >= 86 && conTri <= 90:
        c += 'q';
        break;
      case conTri >= 91 && conTri <= 95:
        c += 'z';
        break;
      case conTri >= 96:
        c += 's';
        break;
    }
  }

  return c;
}
