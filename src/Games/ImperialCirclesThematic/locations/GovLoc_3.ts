import { Location } from '../types';
import description from './GovLoc_3.html?raw';
import { GovLoc_1 } from './GovLoc_1';
import { GovLoc_2 } from './GovLoc_2';
import { GovLoc_4 } from './GovLoc_4';
import { GovLoc_5 } from './GovLoc_5';

export function GovLoc_3() {
    return Location({
        name: 'Receptions of Foreign Leaders & Diplomats',
        description: description,
        destinations: [
            {
                name: 'Imperial Laws and Taxes',
                target: GovLoc_1,
            },
            {
                name: 'National Celebrations',
                target: GovLoc_2,
            },
            {
                name: 'Punishment (Reichsexekution and Reichsacht)',
                target: GovLoc_4,
            },
            {
                name: 'Conflict Mediation & Collective Diplomacy',
                target: GovLoc_5,
            },
        ]
    });
}