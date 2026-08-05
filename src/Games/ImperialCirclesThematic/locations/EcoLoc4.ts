import { Location } from '../types';
import description from './EcoLoc4.html?raw';
import { EcoLoc1 } from './EcoLoc1';
import { EcoLoc2 } from './EcoLoc2';
import { EcoLoc3 } from './EcoLoc3';
import { EcoLoc5 } from './EcoLoc5';

export function EcoLoc4() {
    return Location({
        name: 'Importing Luxury Goods',
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
                name: 'Waste Removal',
                target: EcoLoc5,
            },
        ]
    });
}