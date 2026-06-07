import { Location } from '../types';
import { triggerSecondaryLocation } from './secondaryLocationTrigger';
import description from './Franconia.html?raw';
import { Swabia } from "./Swabia";
import { Westphalia } from "./Westphalia";
import { Austria } from "./Austria";
import { JohannPhilipp } from "../persons/JohannPhilipp";
import { JewishRepresentative } from '../persons/JewishRepresentative';

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
