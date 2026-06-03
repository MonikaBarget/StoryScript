import { Location } from '../types';
import description from './CaesarConstantinFranz.html?raw';

import { Swabia } from "./Swabia";
import { Westphalia } from "./Westphalia";
import { Franconia } from "./Franconia";
import { Austria } from "./Austria";

export function CaesarConstantinFranz() {
    return Location({
        name: 'Liège',
        description: description,
        destinations: [
            {
                name: 'Swabia',
                target: Swabia
            },
            {
                name: 'Westphalia',
                target: Westphalia
            },
            {
                name: 'Franconia',
                target: Franconia
            },
            {
                name: 'Austria',
                target: Austria
            }
        ],
        persons: []
    });
}
