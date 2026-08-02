import { Location } from '../types';
import description from './CurLoc_2.html?raw';
import { CurLoc_1 } from './CurLoc_1';
import { CurLoc_3 } from './CurLoc_3';
import { CurLoc_4 } from './CurLoc_4';
import { CurLoc_5 } from './CurLoc_5';

export function CurLoc_2() {
    return Location({
        name: 'Harmful Currency Practices',
        description: description,
        destinations: [
            {
                name: 'Currency Regulation',
                target: CurLoc_1,
            },
            {
                name: 'Counterfeit Currency',
                target: CurLoc_3,
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