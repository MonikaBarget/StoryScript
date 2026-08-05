import { Location } from '../types';
import description from './EcoLoc5.html?raw';
import { EcoLoc1 } from './EcoLoc1';
import { EcoLoc2 } from './EcoLoc2';
import { EcoLoc3 } from './EcoLoc3';
import { EcoLoc4 } from './EcoLoc4';

export function EcoLoc5() {
    return Location({
        name: 'Waste Removal',
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
        ]
    });
}