import { Location } from '../types';
import description from './CurLoc0.html?raw';
import { CurLoc1 } from './CurLoc1';
import { CurLoc2 } from './CurLoc2';
import { CurLoc3 } from './CurLoc3';
import { CurLoc4 } from './CurLoc4';
import { CurLoc5 } from './CurLoc5';

export function CurLoc0() {
    return Location({
        name: 'Currencies & Fraud',
        description: description,
        destinations: [
            {
                name: 'Currency regulation',
                target: CurLoc1,
            },
            {
                name: 'Harmful currency practices',
                target: CurLoc2,
            },
            {
                name: 'Counterfeit currency',
                target: CurLoc3,
            },
            {
                name: 'Foreign currency',
                target: CurLoc4,
            },
            {
                name: 'Unifying the German currency system',
                target: CurLoc5,
            },
        ]
    });
}