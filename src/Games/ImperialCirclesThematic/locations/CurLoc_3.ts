import { Location } from '../types';
import description from './CurLoc_3.html?raw';
import { CurLoc_1 } from './CurLoc_1';
import { CurLoc_2 } from './CurLoc_2';
import { CurLoc_4 } from './CurLoc_4';
import { CurLoc_5 } from './CurLoc_5';

export function CurLoc_3() {
    return Location({
        name: 'Counterfeit Currency',
        description: description,
        destinations: [
            {
                name: 'Currency Regulation',
                target: CurLoc_1,
            },
            {
                name: 'Harmful Currency Practices',
                target: CurLoc_2,
            },
            {
                name: 'Foreign Currency',
                target: CurLoc_4,
            },
            {
                name: 'Unifying the German Currency System',
                target: CurLoc_5,
            },
        ]
    });
}