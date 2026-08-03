import { Location } from '../types';
import description from './WarLoc5.html?raw';
import { WarLoc2 } from './WarLoc2';
import { WarLoc3 } from './WarLoc3';
import { WarLoc4 } from './WarLoc4';
import { WarLoc6 } from './WarLoc6';

export function WarLoc5() {
    return Location({
        name: '1757 War against Prussia',
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
                name: 'War of the Polish Succession',
                target: WarLoc4,
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc6,
            }
        ]
    });
}