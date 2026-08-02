import { Location } from '../types';
import description from './WarLoc_3.html?raw';
import { WarLoc_2 } from './WarLoc_2';
import { WarLoc_4 } from './WarLoc_4';
import { WarLoc_5 } from './WarLoc_5';
import { WarLoc_6 } from './WarLoc_6';

export function WarLoc_3() {
    return Location({
        name: 'Military conflicts with Louis XIV, King of France',
        description: description,
        destinations: [
            {
                name: 'Wars against the Ottoman Empire',
                target: WarLoc_2,
            },
            {
                name: 'War of the Polish Succession',
                target: WarLoc_4,
            },
            {
                name: '1757 War against Prussia',
                target: WarLoc_5,
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc_6,
            }
        ]
    });
}