import { Location } from '../types';
import description from './CurLoc1.html?raw';
import { CurLoc2 } from './CurLoc2';
import { CurLoc3 } from './CurLoc3';
import { CurLoc4 } from './CurLoc4';
import { CurLoc5 } from './CurLoc5';

export function CurLoc1() {
    return Location({
        name: 'Currency Regulation',
        description: description,
        destinations: [
            {
                name: 'Harmful Currency Practices',
                target: CurLoc2,
            },
            {
                name: 'Counterfeit Currency',
                target: CurLoc3,
            },
            {
                name: 'Foreign Currency',
                target: CurLoc4,
            },
            {
                name: 'Unifying the German Currency System',
                target: CurLoc5,
            },
        ]
    });
}