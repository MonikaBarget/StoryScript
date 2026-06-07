import { IGame, Location } from '../types';
import description from './Westphalia.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Austria } from "./Austria";
import { JohannTheodor } from "../persons/JohannTheodor";
import { MariaTheresia } from "../persons/MariaTheresia";
import { CaesarConstantinFranz } from "../persons/CaesarConstantinFranz";

const triggerSecondaryLocation = (game: IGame, data: Record<string, string>, className: string) => {
    const mapLocation = game.currentMap.locations.find(l => l.location === data.location);

    if (mapLocation?.markerElement) {
        mapLocation.markerElement.style.visibility = className;
    }
}

export function Westphalia() {
    return Location({
        name: 'Westphalia',
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
                name: 'Franconia',
                target: Franconia
            }
        ],
        triggeredActions: [[
            'secondary-location-trigger',
            (game, activate, data) => {
                triggerSecondaryLocation(game, data, activate ? 'visible' : 'hidden');
            }
        ]],
        persons: [
            MariaTheresia(),
            JohannTheodor(),
            CaesarConstantinFranz()        ]
    });
}
