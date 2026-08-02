import { Location } from '../types';
import description from './GovLoc_2.html?raw';
import { GovLoc_1 } from './GovLoc_1';
import { GovLoc_3 } from './GovLoc_3';
import { GovLoc_4 } from './GovLoc_4';
import { GovLoc_5 } from './GovLoc_5';

export function GovLoc_2() {
    return Location({
        name: 'National Celebrations',
        description: description,
        destinations: [
            {
                name: 'Imperial Laws and Taxes',
                target: GovLoc_1,
            },
            {
                name: 'Receptions of Foreign Leaders & Diplomats',
                target: GovLoc_3,
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