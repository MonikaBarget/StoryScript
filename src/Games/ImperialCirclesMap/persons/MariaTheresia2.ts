import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia2.html?raw';

export function MariaTheresia2() {
    return Person({
        uniqueId: 'MariaTheresia2',
        name: 'Maria Theresia',
        description: description,
        source: {
            name: ' ',
            description: '<p>no source added yet</p>'
        },
        hitpoints: 10,
        canAttack: false,
        items: [],
        quests: [],
        conversation: {
            actions: []
        }
    });
}