import { Location } from '../types';
import description from './WarLoc3.html?raw';
import { WarLoc2 } from './WarLoc2';
import { WarLoc4 } from './WarLoc4';
import { WarLoc5 } from './WarLoc5';
import { WarLoc6 } from './WarLoc6';

export function WarLoc3() {
    return Location({
        name: 'Military conflicts with Louis XIV, King of France',
        description: description,
        destinations: [
            {
                name: 'Wars against the Ottoman Empire',
                target: WarLoc2,
            },
            {
                name: 'Succession Conflicts',
                target: WarLoc4,
            },
            {
                name: '1757 War against Prussia',
                target: WarLoc5,
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc6,
            }
        ]
    });
}