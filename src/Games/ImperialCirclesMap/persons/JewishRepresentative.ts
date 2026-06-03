import { IGame, IPerson, Person } from '../types';
import description from './JewishRepresentative.html?raw';

export function JewishRepresentative() {
    return Person({
        name: 'Jewish Community Representative',
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