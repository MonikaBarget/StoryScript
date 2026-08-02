import { Location } from '../types';
import description from './Start.html?raw';
import { WarLoc_1 } from './WarLoc_1';
import { CurLoc_1 } from './CurLoc_1';
import { PovLoc_1 } from './PovLoc_1';
import { GovLoc_1 } from './GovLoc_1';
import { MigLoc_1 } from './MigLoc_1';
import { BookMoser } from '../items/book_moser';
import { PersonNegker } from '../items/person_negker';
import { PlaceEmpire } from '../items/place_empire';
import { PersonEmperor } from '../items/person_emperor';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        features: [
            BookMoser(),
            PersonNegker(),
            PlaceEmpire(),
            PersonEmperor()
        ],
        destinations: [
            {
                name: 'War & Defence',
                target: WarLoc_1,
            },
            {
                name: 'Currencies & Fraud',
                target: CurLoc_1,
            },
            {
                name: 'Poverty & Social Order',
                target: PovLoc_1,
            },
            {
                name: 'Governance & Law',
                target: GovLoc_1,
            },
            {
                name: 'Migration & Economies',
                target: MigLoc_1,
            },
        ],
    });
}
