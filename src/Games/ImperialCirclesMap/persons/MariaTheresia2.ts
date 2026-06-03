import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia2.html?raw';

export function MariaTheresia2() {
    return Person({
        name: 'Maria Theresia',
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