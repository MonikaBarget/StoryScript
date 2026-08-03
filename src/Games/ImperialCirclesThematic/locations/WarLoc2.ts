import { Location } from '../types';
import description from './WarLoc2.html?raw';
import { WarLoc1 } from './WarLoc1';
import { WarLoc3 } from './WarLoc3';
import { WarLoc4 } from './WarLoc4';
import { WarLoc5 } from './WarLoc5';
import { WarLoc6 } from './WarLoc6';

export function WarLoc2() {
    return Location({
        name: 'Wars against the Ottoman Empire',
        description: description,
        destinations: [
            {
                name: 'War & Defence overview',
                target: WarLoc1,
            },
            {
                name: 'Military conflicts with Louis XIV, King of France',
                target: WarLoc3,
            },
            {
                name: 'War of the Polish Succession',
                target: WarLoc4,
            },
            {
                name: '1757 War against Prussia',
                target: WarLoc5,
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc6,
            },
        ],
    });
}