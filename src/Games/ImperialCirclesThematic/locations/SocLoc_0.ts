import { Location } from '../types';
import description from './SocLoc_0.html?raw';
import { SocLoc_1 } from './SocLoc_1';
import { SocLoc_2 } from './SocLoc_2';
import { SocLoc_3 } from './SocLoc_3';
import { SocLoc_4 } from './SocLoc_4';
import { SocLoc_5 } from './SocLoc_5';

export function SocLoc_0() {
    return Location({
        name: 'Social Structures',
        description: description,
        destinations: [
            {
                name: 'Social Structures overview',
                target: SocLoc_1,
            },
            {
                name: 'SocLoc 2',
                target: SocLoc_2,
            },
            {
                name: 'SocLoc 3',
                target: SocLoc_3,
            },
            {
                name: 'SocLoc 4',
                target: SocLoc_4,
            },
            {
                name: 'SocLoc 5',
                target: SocLoc_5,
            },
        ],
    });
}
