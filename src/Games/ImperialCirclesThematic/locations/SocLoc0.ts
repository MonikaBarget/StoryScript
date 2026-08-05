import { Location } from '../types';
import description from './SocLoc0.html?raw';
import { SocLoc1 } from './SocLoc1';
import { SocLoc2 } from './SocLoc2';
import { SocLoc3 } from './SocLoc3';
import { SocLoc4 } from './SocLoc4';
import { SocLoc5 } from './SocLoc5';

export function SocLoc0() {
    return Location({
        name: 'Social Order',
        description: description,
        destinations: [
            {
                name: 'Widows & Orphans',
                target: SocLoc1,
            },
            {
                name: 'Religious Practice',
                target: SocLoc2,
            },
            {
                name: 'Welfare',
                target: SocLoc3,
            },
            {
                name: 'Public Health',
                target: SocLoc4,
            },
            {
                name: 'Cultural Diversity',
                target: SocLoc5,
            },
        ],
    });
}
