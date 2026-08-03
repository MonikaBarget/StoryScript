import { Location } from '../types';
import description from './SocLoc0.html?raw';
import { SocLoc1 } from './SocLoc1';
import { SocLoc2 } from './SocLoc2';
import { SocLoc3 } from './SocLoc3';
import { SocLoc4 } from './SocLoc4';
import { SocLoc5 } from './SocLoc5';

export function SocLoc0() {
    return Location({
        name: 'Social Structures',
        description: description,
        destinations: [
            {
                name: 'Social Structures overview',
                target: SocLoc1,
            },
            {
                name: 'SocLoc 2',
                target: SocLoc2,
            },
            {
                name: 'SocLoc 3',
                target: SocLoc3,
            },
            {
                name: 'SocLoc 4',
                target: SocLoc4,
            },
            {
                name: 'SocLoc 5',
                target: SocLoc5,
            },
        ],
    });
}
