import { Location } from '../types';
import description from './EcoLoc_1.html?raw';
import { EcoLoc_2 } from './EcoLoc_2';
import { EcoLoc_3 } from './EcoLoc_3';
import { EcoLoc_4 } from './EcoLoc_4';
import { EcoLoc_5 } from './EcoLoc_5';

export function EcoLoc_1() {
    return Location({
        name: 'Market Organisation',
        description: description,
        destinations: [
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