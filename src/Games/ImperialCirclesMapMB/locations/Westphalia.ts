import { Location } from '../types';
import { triggerSecondaryLocation } from './secondaryLocationTrigger';
import description from './Westphalia.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Austria } from "./Austria";
import { JohannTheodor } from "../persons/JohannTheodor";
import { MariaTheresia } from "../persons/MariaTheresia";
import { CaesarConstantinFranz } from "../persons/CaesarConstantinFranz";

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
