import { Location } from '../types';
import description from './EcoLoc2.html?raw';
import { EcoLoc1 } from './EcoLoc1';
import { EcoLoc3 } from './EcoLoc3';
import { EcoLoc4 } from './EcoLoc4';
import { EcoLoc5 } from './EcoLoc5';

export function EcoLoc2() {
    return Location({
        name: 'Regulating Labour',
        description: description,
        destinations: [
            {
                name: 'Market Organisation',
                target: EcoLoc1,
            },
            {
                name: 'Transregional Trade',
                target: EcoLoc3,
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