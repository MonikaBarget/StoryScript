import { IGame, Location } from '../types';
import description from './Franconia.html?raw';
import { Swabia } from "./Swabia";
import { Westphalia } from "./Westphalia";
import { Austria } from "./Austria";
import { JohannPhilipp } from "../persons/JohannPhilipp";
import { JewishRepresentative } from '../persons/JewishRepresentative';

const triggerSecondaryLocation = (game: IGame, data: Record<string, string>, className: string) => {
    const mapLocation = game.currentMap.locations.find(l => l.location === data.location);

    if (mapLocation?.markerElement) {
        mapLocation.markerElement.style.visibility = className;
    }
}

export function Franconia() {
    return Location({
        name: 'Franconia',
        description: description,
        destinations: [
            {
                name: 'Swabia',
                target: Swabia
            },
            {
                name: 'Austria',
                target: Austria
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
            JohannPhilipp(),
            JewishRepresentative()
        ]
    });
}
