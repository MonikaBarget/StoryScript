import { Location } from '../types';
import description from './EcoLoc_2.html?raw';
import { EcoLoc_1 } from './EcoLoc_1';
import { EcoLoc_3 } from './EcoLoc_3';
import { EcoLoc_4 } from './EcoLoc_4';
import { EcoLoc_5 } from './EcoLoc_5';

export function EcoLoc_2() {
    return Location({
        name: 'Regulating Labour Mobility',
        description: description,
        destinations: [
            {
                name: 'Market Organisation',
                target: EcoLoc_1,
            },
            {
                name: 'Transcontinental Trade',
                target: EcoLoc_3,
            },
            {
                name: 'Importing Luxury Goods',
                target: EcoLoc_4,
            },
            {
                name: 'Waste Removal',
                target: EcoLoc_5,
            },
        ]
    });
}