import { Location } from '../types';
import description from './CurLoc5.html?raw';
import { CurLoc1 } from './CurLoc1';
import { CurLoc2 } from './CurLoc2';
import { CurLoc3 } from './CurLoc3';
import { CurLoc4 } from './CurLoc4';

export function CurLoc5() {
    return Location({
        name: 'Unifying the German Currency System',
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
                name: 'Counterfeit Currency',
                target: CurLoc3,
            },
            {
                name: 'Foreign Currency',
                target: CurLoc4,
            },
        ]
    });
}