import { IGame, Location } from '../types';
import description from './Austria.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Westphalia } from "./Westphalia";
import { MariaTheresia2 } from '../persons/MariaTheresia2';

const triggerSecondaryLocation = (game: IGame, data: Record<string, string>, className: string) => {
    const mapLocation = game.currentMap.locations.find(l => l.location === data.location);

    if (mapLocation?.markerElement) {
        mapLocation.markerElement.style.visibility = className;
    }
}

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