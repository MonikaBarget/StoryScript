import { Location } from '../types';
import description from './CurLoc2.html?raw';
import { CurLoc1 } from './CurLoc1';
import { CurLoc3 } from './CurLoc3';
import { CurLoc4 } from './CurLoc4';
import { CurLoc5 } from './CurLoc5';

export function CurLoc2() {
    return Location({
        name: 'Harmful Currency Practices',
        description: description,
        destinations: [
            {
                name: 'Currency Regulation',
                target: CurLoc1,
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