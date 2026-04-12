import { Location } from '../types';
import description from './WarLocOne.html?raw';
import { WarLocTwo } from './WarLocTwo';

export function WarLocOne() {
    return Location({
        name: 'War & Defence',
        description: description,
        destinations: [WarLocTwo
        ]
    });
}