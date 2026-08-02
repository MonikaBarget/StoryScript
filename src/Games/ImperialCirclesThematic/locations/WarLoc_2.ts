import { Location } from '../types';
import description from './WarLoc_2.html?raw';
import { WarLoc_1 } from './WarLoc_1';
import { WarLoc_3 } from './WarLoc_3';
import { WarLoc_4 } from './WarLoc_4';
import { WarLoc_5 } from './WarLoc_5';
import { WarLoc_6 } from './WarLoc_6';

export function WarLoc_2() {
    return Location({
        name: 'Wars against the Ottoman Empire',
        description: description,
        destinations: [
            {
                name: 'War & Defence overview',
                target: WarLoc_1,
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
            },
            {
                name: 'French Revolutionary and Napoleonic Wars',
                target: WarLoc_6,
            },
        ],
    });
}