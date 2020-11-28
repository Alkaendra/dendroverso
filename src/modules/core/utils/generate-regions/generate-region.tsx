// import { Region } from '../../../admin/components/admin-commons/admin-models/region.model';
import { SECTOR_ROLE } from '../../../admin/components/admin-commons/admin-models/sector.model';
import { generateRandomNumber } from '../utils';

export const generateSectorsRoles = (sectorNumbers: number): string[] => {
  let sectorRoles: string[] = [];

  for (let i = 0; i <= sectorNumbers; i += 1) {
    const industrialSectors = generateRandomNumber(1, 2);
    const resourceProductorSectors = generateRandomNumber(1, 2);
    if (i === 0) {
      sectorRoles = [...sectorRoles, SECTOR_ROLE.ADMINISTRATIVE];
    } else if (i > 0 && i <= industrialSectors) {
      sectorRoles = [...sectorRoles, SECTOR_ROLE.INDUSTRIAL];
    } else if (i > industrialSectors && i <= industrialSectors + resourceProductorSectors) {
      sectorRoles = [...sectorRoles, SECTOR_ROLE.RESOURCE_PRODUCER];
    } else {
      let generateRandomRole = generateRandomNumber(1, 100);
      if (generateRandomRole > 0 && generateRandomRole <= 50) {
        sectorRoles = [...sectorRoles, SECTOR_ROLE.INDUSTRIAL];
      } else if (generateRandomRole >= 51 && generateRandomRole <= 70) {
        sectorRoles = [...sectorRoles, SECTOR_ROLE.COMMERCIAL];
      } else if (generateRandomRole >= 71 && generateRandomRole <= 90) {
        sectorRoles = [...sectorRoles, SECTOR_ROLE.MILITAR];
      } else {
        sectorRoles = [...sectorRoles, SECTOR_ROLE.CULTURAL];
      }
    }
  }

  return sectorRoles;
};

// export const generateRegion = () => {
//   let region: Region = {} as any;
//   const sectorsNumber = generateRandomNumber(4, 12);
//   const sectorRoles = generateSectorsRoles(sectorsNumber);
// };
