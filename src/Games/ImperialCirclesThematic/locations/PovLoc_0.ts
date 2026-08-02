import { Location } from '../types';
import description from './PovLoc_0.html?raw';
import { PovLoc_1 } from './PovLoc_1';
import { PovLoc_2 } from './PovLoc_2';
import { PovLoc_3 } from './PovLoc_3';
import { PovLoc_4 } from './PovLoc_4';
import { PovLoc_5 } from './PovLoc_5';
import { PovLoc_6 } from './PovLoc_6';

export function PovLoc_0() {
    return Location({
        name: 'Poverty & Social Order',
        description: description,
        destinations: [
            {
                name: 'Poverty & Social Order overview',
                target: PovLoc_1,
            },
            {
                name: 'PovLoc 2',
                target: PovLoc_2,
            },
            {
                name: 'PovLoc 3',
                target: PovLoc_3,
            },
            {
                name: 'PovLoc 4',
                target: PovLoc_4,
            },
            {
                name: 'PovLoc 5',
                target: PovLoc_5,
            },
            {
                name: 'PovLoc 6',
                target: PovLoc_6,
            },
        ],
    });
}
