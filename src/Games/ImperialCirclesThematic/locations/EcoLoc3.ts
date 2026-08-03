import { Location } from '../types';
import description from './EcoLoc3.html?raw';
import { EcoLoc1 } from './EcoLoc1';
import { EcoLoc2 } from './EcoLoc2';
import { EcoLoc4 } from './EcoLoc4';
import { EcoLoc5 } from './EcoLoc5';

export function EcoLoc3() {
    return Location({
        name: 'Transcontinental Trade',
        description: description,
        destinations: [
            {
                name: 'Market Organisation',
                target: EcoLoc1,
            },
            {
                name: 'Regulating Labour Mobility',
                target: EcoLoc2,
            },
            {
                name: 'Importing Luxury Goods',
                target: EcoLoc4,
            },
            {
                name: 'Waste Removal',
                target: EcoLoc5,
            },
        ]
    });
}