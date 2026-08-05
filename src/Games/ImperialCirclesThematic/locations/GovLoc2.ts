import { Location } from '../types';
import description from './GovLoc2.html?raw';
import { GovLoc1 } from './GovLoc1';
import { GovLoc3 } from './GovLoc3';
import { GovLoc4 } from './GovLoc4';
import { GovLoc5 } from './GovLoc5';

export function GovLoc2() {
    return Location({
        name: 'National Celebrations',
        description: description,
        destinations: [
            {
                name: 'Imperial Laws & Taxes',
                target: GovLoc1,
            },
            {
                name: 'Diplomatic Relations',
                target: GovLoc3,
            },
            {
                name: 'Punishment (Reichsexekution & Reichsacht)',
                target: GovLoc4,
            },
            {
                name: 'Conflict Mediation',
                target: GovLoc5,
            },
        ]
    });
}