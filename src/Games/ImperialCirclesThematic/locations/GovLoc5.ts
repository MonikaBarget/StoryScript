import { Location } from '../types';
import description from './GovLoc5.html?raw';
import { GovLoc1 } from './GovLoc1';
import { GovLoc2 } from './GovLoc2';
import { GovLoc3 } from './GovLoc3';
import { GovLoc4 } from './GovLoc4';

export function GovLoc5() {
    return Location({
        name: 'Conflict Mediation',
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
                name: 'Punishment (Reichsexekution & Reichsacht)',
                target: GovLoc4,
            },
        ]
    });
}