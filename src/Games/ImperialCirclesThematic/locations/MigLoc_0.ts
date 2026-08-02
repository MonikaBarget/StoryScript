import { Location } from '../types';
import description from './MigLoc_0.html?raw';
import { MigLoc_1 } from './MigLoc_1';
import { MigLoc_2 } from './MigLoc_2';
import { MigLoc_3 } from './MigLoc_3';
import { MigLoc_4 } from './MigLoc_4';
import { MigLoc_5 } from './MigLoc_5';
import { MigLoc_6 } from './MigLoc_6';

export function MigLoc_0() {
    return Location({
        name: 'Migration & Economies',
        description: description,
        destinations: [
            {
                name: 'Migration & Economies overview',
                target: MigLoc_1,
            },
            {
                name: 'MigLoc 2',
                target: MigLoc_2,
            },
            {
                name: 'MigLoc 3',
                target: MigLoc_3,
            },
            {
                name: 'MigLoc 4',
                target: MigLoc_4,
            },
            {
                name: 'MigLoc 5',
                target: MigLoc_5,
            },
            {
                name: 'MigLoc 6',
                target: MigLoc_6,
            },
        ],
    });
}
