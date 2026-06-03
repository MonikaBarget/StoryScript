import { Location } from '../types';
import description from './Westphalia.html?raw';
import { Swabia } from "./Swabia";
import { Franconia } from "./Franconia";
import { Austria } from "./Austria";
import { JohannTheodor } from "../persons/JohannTheodor";
import { MariaTheresia } from "../persons/MariaTheresia";

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
        persons: [
            MariaTheresia(),
            JohannTheodor()
        ]
    });
}
