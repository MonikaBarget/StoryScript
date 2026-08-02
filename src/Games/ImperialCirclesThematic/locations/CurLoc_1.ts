import { Location } from '../types';
import description from './CurLoc_1.html?raw';
import { CurLoc_2 } from './CurLoc_2';
import { CurLoc_3 } from './CurLoc_3';
import { CurLoc_4 } from './CurLoc_4';
import { CurLoc_5 } from './CurLoc_5';

export function CurLoc_1() {
    return Location({
        name: 'Currency Regulation',
        description: description,
        destinations: [
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
            {
                name: 'Unifying the German Currency System',
                target: CurLoc_5,
            },
        ]
    });
}