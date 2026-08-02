import { Location } from '../types';
import description from './WarLoc_5.html?raw';
import { WarLoc_2 } from './WarLoc_2';
import { WarLoc_3 } from './WarLoc_3';
import { WarLoc_4 } from './WarLoc_4';
import { WarLoc_6 } from './WarLoc_6';

export function WarLoc_5() {
    return Location({
        name: '1757 War against Prussia',
        description: description,
        destinations: [
            {
                name: 'Wars against the Ottoman Empire',
                target: WarLoc_2,
            },
            {
                name: 'Military conflicts with Louis XIV, King of France',
                target: WarLoc_3,
            },
            {
                name: 'War of the Polish Succession',
                target: WarLoc_4,
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc_6,
            }
        ]
    });
}