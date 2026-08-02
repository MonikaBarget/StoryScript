import { Location } from '../types';
import description from './Start.html?raw';
import { WarLoc_0 } from './WarLoc_0';
import { CurLoc_0 } from './CurLoc_0';
import { PovLoc_0 } from './PovLoc_0';
import { GovLoc_0 } from './GovLoc_0';
import { MigLoc_0 } from './MigLoc_0';
import { EcoLoc_0 } from './EcoLoc_0';
import { SocLoc_0 } from './SocLoc_0';
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
                target: WarLoc_0,
            },
            {
                name: 'Currencies & Fraud',
                target: CurLoc_0,
            },
            {
                name: 'Poverty & Social Order',
                target: PovLoc_0,
            },
            {
                name: 'Governance & Law',
                target: GovLoc_0,
            },
            {
                name: 'Migration & Economies',
                target: MigLoc_0,
            },
            {
                name: 'Economies & Mobility',
                target: EcoLoc_0,
            },
            {
                name: 'Social Structures',
                target: SocLoc_0,
            },
        ],
    });
}
