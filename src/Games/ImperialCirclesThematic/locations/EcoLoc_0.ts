import { Location } from '../types';
import description from './EcoLoc_0.html?raw';
import { EcoLoc_1 } from './EcoLoc_1';
import { EcoLoc_2 } from './EcoLoc_2';
import { EcoLoc_3 } from './EcoLoc_3';
import { EcoLoc_4 } from './EcoLoc_4';
import { EcoLoc_5 } from './EcoLoc_5';

export function EcoLoc_0() {
    return Location({
        name: 'Economies & Mobility',
        description: description,
        destinations: [
            {
                name: 'Market Organisation',
                target: EcoLoc_1,
            },
            {
                name: 'Regulating Labour Mobility',
                target: EcoLoc_2,
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