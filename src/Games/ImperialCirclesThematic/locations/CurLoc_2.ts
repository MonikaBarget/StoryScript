import { Location } from '../types';
import description from './CurLoc_2.html?raw';
import { CurLoc_1 } from './CurLoc_0';
import { CurLoc_2 } from './CurLoc_1';

export function CurLoc_3() {
    return Location({
        name: 'Fraud and trust in money',
        description: description,
        destinations: [
            {
                name: 'Currencies & Fraud overview',
                target: CurLoc_1,
            },
            {
                name: 'Currency systems and exchange',
                target: CurLoc_2,
            },
        ],
    });
}
