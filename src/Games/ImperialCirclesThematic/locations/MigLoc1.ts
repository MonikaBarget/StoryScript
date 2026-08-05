import { Location } from '../types';
import description from './MigLoc1.html?raw';
import { MigLoc2 } from './MigLoc2';
import { MigLoc3 } from './MigLoc3';
import { MigLoc4 } from './MigLoc4';
import { MigLoc5 } from './MigLoc5';
import { MigLoc6 } from './MigLoc6';

export function MigLoc1() {
    return Location({
        name: 'Travelling Crafts- and Tradespeople',
        description: description,
        destinations: [
                    {
                        name: 'Travelling Soldiers',
                        target: MigLoc2,
                    },
                    {
                        name: 'Travelling Beggars',
                        target: MigLoc3,
                    },
                    {
                        name: 'Travelling Jews',
                        target: MigLoc4,
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