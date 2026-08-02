import { Location } from '../types';
import description from './GovLoc_4.html?raw';
import { GovLoc_1 } from './GovLoc_1';
import { GovLoc_2 } from './GovLoc_2';
import { GovLoc_3 } from './GovLoc_3';
import { GovLoc_5 } from './GovLoc_5';

export function GovLoc_4() {
    return Location({
        name: 'Punishment (Reichsexekution and Reichsacht)',
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
                name: 'Receptions of Foreign Leaders & Diplomats',
                target: GovLoc_3,
            },
            {
                name: 'Conflict Mediation & Collective Diplomacy',
                target: GovLoc_5,
            },
        ]
    });
}