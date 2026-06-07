import { Location } from '../types';
import { triggerSecondaryLocation } from './secondaryLocationTrigger';
import description from './Austria.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Westphalia } from "./Westphalia";
import { MariaTheresia2 } from '../persons/MariaTheresia2';

export function Austria() {
    return Location({
        name: 'Austria',
        description: description,
        destinations: [
            {
                name: 'Swabia',
                target: Swabia
            },
            {
                name: 'Franconia',
                target: Franconia
            },
            {
                name: 'Westphalia',
                target: Westphalia
            }
        ],
        triggeredActions: [[
            'secondary-location-trigger',
            (game, activate, data) => {
                triggerSecondaryLocation(game, data, activate ? 'visible' : 'hidden');
            }
        ]],
        persons: [
            MariaTheresia2()
        ]
    });
}