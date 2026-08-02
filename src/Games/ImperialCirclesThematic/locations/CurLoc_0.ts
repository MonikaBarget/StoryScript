import { Location } from '../types';
import description from './CurLoc_0.html?raw';
import { CurLoc_1 } from './CurLoc_1';
import { CurLoc_2 } from './CurLoc_2';
import { CurLoc_3 } from './CurLoc_3';
import { CurLoc_4 } from './CurLoc_3';
import { CurLoc_5 } from './CurLoc_4';

export function CurLoc_0() {
    return Location({
        name: 'Currencies & Fraud',
        description: description,
        destinations: [
            {
                name: 'Currency regulation',
                target: CurLoc_1,
            },
            {
                name: 'Harmful currency practices',
                target: CurLoc_2,
            },
            {
                name: 'Counterfeit currency',
                target: CurLoc_3,
            },
            {
                name: 'Foreign currency',
                target: CurLoc_4,
            },
            {
                name: 'Unifying the German currency system',
                target: CurLoc_5,
            },
        ]
    });
}