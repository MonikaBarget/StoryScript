import { Location } from '../types';
import description from './CurLoc4.html?raw';
import { CurLoc1 } from './CurLoc1';
import { CurLoc2 } from './CurLoc2';
import { CurLoc3 } from './CurLoc3';
import { CurLoc5 } from './CurLoc5';

export function CurLoc4() {
    return Location({
        name: 'Foreign Currency',
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
                name: 'Unifying the German Currency System',
                target: CurLoc5,
            },
        ]
    });
}