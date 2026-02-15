import { Location } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { Location1_1 } from './WarLocOne';
import { Location2_1 } from './CurLocOne';
import { Location3_1 } from './PovLocOne';
import { Location4_1 } from './GovLocOne';
import { Location5_1 } from './MigLocOne';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        destinations: [
            {
                name: 'War & Defence',
                target: Location1_1,
            },
            {
                name: 'Currencies & Fraud',
                target: Location2_1,
            },
            {
                name: 'Poverty & Social Order',
                target: Location3_1,
            },
            {
                name: 'Governance & Law',
                target: Location4_1,
            },
            {
                name: 'Migration & Economies',
                target: Location5_1,
            },
        ],
    });
}
