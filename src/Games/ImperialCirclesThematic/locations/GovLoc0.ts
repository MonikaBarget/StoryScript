import { Location } from '../types';
import description from './GovLoc0.html?raw';
import { GovLoc1 } from './GovLoc1';
import { GovLoc2 } from './GovLoc2';
import { GovLoc3 } from './GovLoc3';
import { GovLoc4 } from './GovLoc4';
import { GovLoc5 } from './GovLoc5';

export function GovLoc0() {
    return Location({
        name: 'Governance & Law',
        description: description,
        destinations: [
            {
                name: 'Imperial Laws and Taxes',
                target: GovLoc1,
            },
            {
                name: 'National Celebrations',
                target: GovLoc2,
            },
            {
                name: 'Receptions of Foreign Leaders & Diplomats',
                target: GovLoc3,
            },
            {
                name: 'Punishment (Reichsexekution and Reichsacht)',
                target: GovLoc4,
            },
            {
                name: 'Conflict Mediation & Collective Diplomacy',
                target: GovLoc5,
            },
        ]
    });
}