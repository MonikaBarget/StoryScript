import { Location } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { WarLocOne } from './WarLocOne';
import { CurLocOne } from './CurLocOne';
import { PovLocOne } from './PovLocOne';
import { GovLocOne } from './GovLocOne';
import { MigLocOne } from './MigLocOne';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
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
