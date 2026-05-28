import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia.html?raw';

export function MariaTheresia() {
    return Person({
        name: 'Maria Theresia',
        description: description,
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
