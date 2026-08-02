import { Location } from '../types';
import description from './CurLoc_1.html?raw';
import { CurLoc_2 } from './CurLoc_2';
import { CurLoc_3 } from './CurLoc_2';
import { CurLoc_4 } from './CurLoc_3';
import { CurLoc_5 } from './CurLoc_4';

export function CurLoc_2() {
    return Location({
        name: 'Currency systems and exchange',
        description: description,
        destinations: [
            {
                name: 'Currencies & Fraud overview',
                target: CurLoc_1,
            },
            {
                name: 'Fraud and trust in money',
                target: CurLoc_3,
            },
        ],
    });
}
