import { Location } from '../types';
import description from './Austria.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Westphalia } from "./Westphalia";
import { MariaTheresia } from "../persons/MariaTheresia";

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
        persons: [
            MariaTheresia()
        ]
    });
}
