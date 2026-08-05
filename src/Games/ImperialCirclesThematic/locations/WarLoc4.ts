import { Location } from '../types';
import description from './WarLoc4.html?raw';
import { WarLoc2 } from './WarLoc2';
import { WarLoc3 } from './WarLoc3';
import { WarLoc5 } from './WarLoc5';
import { WarLoc6 } from './WarLoc6';

export function WarLoc4() {
    return Location({
        name: 'Succession Conflicts',
        description: description,
        destinations: [
            {
                name: 'Wars against the Ottoman Empire',
                target: WarLoc2,
            },
            {
                name: 'Military conflicts with Louis XIV, King of France',
                target: WarLoc3,
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