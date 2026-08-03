import { Location } from '../types';
import description from './Start.html?raw';
import { WarLoc0 } from './WarLoc0';
import { CurLoc0 } from './CurLoc0';
import { PovLoc0 } from './PovLoc0';
import { GovLoc0 } from './GovLoc0';
import { MigLoc0 } from './MigLoc0';
import { EcoLoc0 } from './EcoLoc0';
import { SocLoc0 } from './SocLoc0';
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
                target: WarLoc0,
            },
            {
                name: 'Currencies & Fraud',
                target: CurLoc0,
            },
            {
                name: 'Poverty & Social Order',
                target: PovLoc0,
            },
            {
                name: 'Governance & Law',
                target: GovLoc0,
            },
            {
                name: 'Migration & Economies',
                target: MigLoc0,
            },
            {
                name: 'Economies & Mobility',
                target: EcoLoc0,
            },
            {
                name: 'Social Structures',
                target: SocLoc0,
            },
        ],
    });
}
