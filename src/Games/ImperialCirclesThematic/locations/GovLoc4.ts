import { Location } from '../types';
import description from './GovLoc4.html?raw';
import { GovLoc1 } from './GovLoc1';
import { GovLoc2 } from './GovLoc2';
import { GovLoc3 } from './GovLoc3';
import { GovLoc5 } from './GovLoc5';

export function GovLoc4() {
    return Location({
        name: 'Punishment (Reichsexekution & Reichsacht)',
        description: description,
        destinations: [
            {
                name: 'Imperial Laws & Taxes',
                target: GovLoc1,
            },
            {
                name: 'National Celebrations',
                target: GovLoc2,
            },
            {
                name: 'Diplomatic Relations',
                target: GovLoc3,
            },
            {
                name: 'Conflict Mediation',
                target: GovLoc5,
            },
        ]
    });
}