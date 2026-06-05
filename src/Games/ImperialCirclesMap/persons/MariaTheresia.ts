import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia.html?raw';

export function MariaTheresia() {
    return Person({
        name: 'Maria Theresia',
        description: description,
        source: '<p>More information: <a href="https://en.wikipedia.org/wiki/Maria_Theresia" target="_blank">Wikipedia — Maria Theresia</a></p>',
        hitpoints: 10,
        canAttack: false,
        items: [
        ],
        quests: [
        ],
        conversation: {
            actions: [
            ]
        },
    });
}
