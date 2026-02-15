import { Location } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { Location1_1 } from './location1_1';
import { Location2_1 } from './location2_1';
import { Location3_1 } from './location3_1';
import { Location4_1 } from './location4_1';
import { Location5_1 } from './location5_1';

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
