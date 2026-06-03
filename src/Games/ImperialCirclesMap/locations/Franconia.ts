import { Location } from '../types';
import description from './Franconia.html?raw';
import { Swabia } from "./Swabia";
import { Westphalia } from "./Westphalia";
import { Austria } from "./Austria";
import { BishopWuerzburg } from "../persons/BishopWuerzburg";

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
        persons: [
            BishopWuerzburg()
        ]
    });
}
