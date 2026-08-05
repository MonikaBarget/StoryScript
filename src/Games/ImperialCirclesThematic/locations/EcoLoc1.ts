import { Location } from '../types';
import description from './EcoLoc1.html?raw';
import { EcoLoc2 } from './EcoLoc2';
import { EcoLoc3 } from './EcoLoc3';
import { EcoLoc4 } from './EcoLoc4';
import { EcoLoc5 } from './EcoLoc5';

export function EcoLoc1() {
    return Location({
        name: 'Market Organisation',
        description: description,
        destinations: [
            {
                name: 'Regulating Labour',
                target: EcoLoc2,
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