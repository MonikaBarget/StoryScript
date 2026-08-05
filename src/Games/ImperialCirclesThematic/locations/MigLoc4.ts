import { Location } from '../types';
import description from './MigLoc4.html?raw';
import { MigLoc1 } from './MigLoc1';
import { MigLoc2 } from './MigLoc2';
import { MigLoc3 } from './MigLoc3';
import { MigLoc5 } from './MigLoc5';
import { MigLoc6 } from './MigLoc6';

export function MigLoc4() {
    return Location({
        name: 'Travelling Jews',
        description: description,
        destinations: [
            {
                name: 'Travelling Crafts- and Tradespeople',
                target: MigLoc1,
            },
            {
                name: 'Travelling Soldiers',
                target: MigLoc2,
            },
            {
                name: 'Travelling Beggars',
                target: MigLoc3,
            },
            {
                name: 'Emigration',
                target: MigLoc5,
            },
            {
                name: 'Immigration',
                target: MigLoc6,
            },
        ],
    });
}
