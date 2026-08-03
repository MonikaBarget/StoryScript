import { Location } from '../types';
import description from './PovLoc0.html?raw';
import { PovLoc1 } from './PovLoc1';
import { PovLoc2 } from './PovLoc2';
import { PovLoc3 } from './PovLoc3';
import { PovLoc4 } from './PovLoc4';
import { PovLoc5 } from './PovLoc5';
import { PovLoc6 } from './PovLoc6';

export function PovLoc0() {
    return Location({
        name: 'Poverty & Social Order',
        description: description,
        destinations: [
            {
                name: 'Poverty & Social Order overview',
                target: PovLoc1,
            },
            {
                name: 'PovLoc 2',
                target: PovLoc2,
            },
            {
                name: 'PovLoc 3',
                target: PovLoc3,
            },
            {
                name: 'PovLoc 4',
                target: PovLoc4,
            },
            {
                name: 'PovLoc 5',
                target: PovLoc5,
            },
            {
                name: 'PovLoc 6',
                target: PovLoc6,
            },
        ],
    });
}
