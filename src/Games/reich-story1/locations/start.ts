import { Location, IItem } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { WarLocOne } from './WarLocOne';
import { CurLocOne } from './CurLocOne';
import { PovLocOne } from './PovLocOne';
import { GovLocOne } from './GovLocOne';
import { MigLocOne } from './MigLocOne';
import { Combinations } from '../combinations';
import { book_moser } from '../items/book_moser';
import { person_negker } from '../items/person_negker';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        features: [
            book_moser(),
            person_negker()
        ],
        destinations: [
            {
                name: 'War & Defence',
                target: WarLocOne,
            },
            {
                name: 'Currencies & Fraud',
                target: CurLocOne,
            },
            {
                name: 'Poverty & Social Order',
                target: PovLocOne,
            },
            {
                name: 'Governance & Law',
                target: GovLocOne,
            },
            {
                name: 'Migration & Economies',
                target: MigLocOne,
            },
        ],
    });
}
