import { Location } from '../types';
import description from './CurLoc_5.html?raw';
import { CurLoc_1 } from './CurLoc_1';
import { CurLoc_2 } from './CurLoc_2';
import { CurLoc_3 } from './CurLoc_3';
import { CurLoc_4 } from './CurLoc_4';

export function CurLoc_5() {
    return Location({
        name: 'Unifying the German Currency System',
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
                name: 'Counterfeit Currency',
                target: CurLoc_3,
            },
            {
                name: 'Foreign Currency',
                target: CurLoc_4,
            },
        ]
    });
}