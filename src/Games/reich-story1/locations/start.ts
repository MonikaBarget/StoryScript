import { Location } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { Location1 } from './Location1';
import { Location2 } from './Location2';
import { Location3 } from './Location3';
import { Location4 } from './Location4';
import { Location5 } from './Location5';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        destinations: [
            {
                name: 'War and imperial defence',
                target: Location1,
            },
            {
                name: 'Currencies and monetary fraud',
                target: Location2,
            },
            {
                name: 'Poverty and social order',
                target: Location3,
            },
            {
                name: 'Imperial governance and law',
                target: Location4,
            },
            {
                name: 'Migration and cross-border economies',
                target: Location5,
            },
        ],
    });
}
