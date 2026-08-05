import { Location } from '../types';
import description from './EcoLoc0.html?raw';
import { EcoLoc1 } from './EcoLoc1';
import { EcoLoc2 } from './EcoLoc2';
import { EcoLoc3 } from './EcoLoc3';
import { EcoLoc4 } from './EcoLoc4';
import { EcoLoc5 } from './EcoLoc5';

export function EcoLoc0() {
    return Location({
        name: 'Economy',
        description: description,
        destinations: [
            {
                name: 'Market Organisation',
                target: EcoLoc1,
            },
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