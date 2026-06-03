import { IGame, IPerson, Person } from '../types';
import description from './JohannPhilipp.html?raw';

export function JohannPhilipp() {
    return Person({
        name: 'Johann Philipp von Greiffenclau Vollraths',
        description: description,
        hitpoints: 10,
        canAttack: false,
        items: [],
        quests: [],
        conversation: {
            actions: []
        }
    });
}

