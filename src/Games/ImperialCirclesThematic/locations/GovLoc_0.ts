import { Location } from '../types';
import description from './GovLoc_0.html?raw';
import { GovLoc_1 } from './GovLoc_1';

export function GovLoc_0() {
    return Location({
        name: 'Governance & Law',
        description: description,
        destinations: [
            {
                name: 'Governance & Law overview',
                target: GovLoc_1,
            },
        ],
    });
}
