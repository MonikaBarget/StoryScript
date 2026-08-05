import { Location } from '../types';
import description from './WarLoc6.html?raw';
import { WarLoc2 } from './WarLoc2';
import { WarLoc3 } from './WarLoc3';
import { WarLoc4 } from './WarLoc4';
import { WarLoc5 } from './WarLoc5';

export function WarLoc6() {
    return Location({
        name: 'French Revolutionary and Napoleonic Wars',
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
                name: 'Succession Conflicts',
                target: WarLoc4,
            },
            {
                name: '1757 War against Prussia',
                target: WarLoc5,
            }
        ]
    });
}