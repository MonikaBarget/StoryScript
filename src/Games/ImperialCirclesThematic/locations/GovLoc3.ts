import { Location } from '../types';
import description from './GovLoc3.html?raw';
import { GovLoc1 } from './GovLoc1';
import { GovLoc2 } from './GovLoc2';
import { GovLoc4 } from './GovLoc4';
import { GovLoc5 } from './GovLoc5';

export function GovLoc3() {
    return Location({
        name: 'Diplomatic Relations',
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