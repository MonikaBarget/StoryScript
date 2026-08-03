import { Location } from '../types';
import description from './CurLoc3.html?raw';
import { CurLoc1 } from './CurLoc1';
import { CurLoc2 } from './CurLoc2';
import { CurLoc4 } from './CurLoc4';
import { CurLoc5 } from './CurLoc5';

export function CurLoc3() {
    return Location({
        name: 'Counterfeit Currency',
        description: description,
        destinations: [
            {
                name: 'Currency Regulation',
                target: CurLoc1,
            },
            {
                name: 'Harmful Currency Practices',
                target: CurLoc2,
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