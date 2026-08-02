import { Location } from '../types';
import description from './WarLoc_6.html?raw';
import { WarLoc_2 } from './WarLoc_2';
import { WarLoc_3 } from './WarLoc_3';
import { WarLoc_4 } from './WarLoc_4';
import { WarLoc_5 } from './WarLoc_5';

export function WarLoc_6() {
    return Location({
        name: 'French Revolutionary and Napoleonic Wars',
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
                name: '1757 War against Prussia',
                target: WarLoc_5,
            }
        ]
    });
}