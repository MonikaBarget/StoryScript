import { Location } from '../types';
import description from './MigLoc0.html?raw';
import { MigLoc1 } from './MigLoc1';
import { MigLoc2 } from './MigLoc2';
import { MigLoc3 } from './MigLoc3';
import { MigLoc4 } from './MigLoc4';
import { MigLoc5 } from './MigLoc5';
import { MigLoc6 } from './MigLoc6';

export function MigLoc0() {
    return Location({
        name: 'Migration & Economies',
        description: description,
        destinations: [
            {
                name: 'Migration & Economies overview',
                target: MigLoc1,
            },
            {
                name: 'MigLoc 2',
                target: MigLoc2,
            },
            {
                name: 'MigLoc 3',
                target: MigLoc3,
            },
            {
                name: 'MigLoc 4',
                target: MigLoc4,
            },
            {
                name: 'MigLoc 5',
                target: MigLoc5,
            },
            {
                name: 'MigLoc 6',
                target: MigLoc6,
            },
        ],
    });
}
