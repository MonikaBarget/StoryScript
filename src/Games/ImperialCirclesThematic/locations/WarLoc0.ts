import { Location } from '../types';
import description from './WarLoc0.html?raw';
import { WarLoc1 } from './WarLoc1';
import { WarLoc2 } from './WarLoc2';
import { WarLoc3 } from './WarLoc3';
import { WarLoc4 } from './WarLoc4';
import { WarLoc5 } from './WarLoc5';
import { WarLoc6 } from './WarLoc6';

export function WarLoc0() {
    return Location({
        name: 'War & Defence',
        description: description,
        destinations: [
            {
                name: 'European Expansion',
                target: WarLoc1,
            },
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
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc6,
            },
        ],
    });
}
