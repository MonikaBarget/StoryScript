import { Location } from '../types';
import description from './SciLoc0.html?raw';
import { SciLoc1 } from './SciLoc1';
import { SciLoc2 } from './SciLoc2';
import { SciLoc3 } from './SciLoc3';
import { SciLoc4 } from './SciLoc4';
import { SciLoc5 } from './SciLoc5';
import { SciLoc6 } from './SciLoc6';

export function SciLoc0() {
    return Location({
        name: 'Knowledge',
        description: description,
        destinations: [
            {
                name: 'SciLoc 1',
                target: SciLoc1,
            },
            {
                name: 'SciLoc 2',
                target: SciLoc2,
            },
            {
                name: 'SciLoc 3',
                target: SciLoc3,
            },
            {
                name: 'SciLoc 4',
                target: SciLoc4,
            },
            {
                name: 'SciLoc 5',
                target: SciLoc5,
            },
            {
                name: 'SciLoc 6',
                target: SciLoc6,
            },
        ],
    });
}
