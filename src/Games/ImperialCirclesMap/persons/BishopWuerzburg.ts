import { IGame, IPerson, Person } from '../types';
import description from './BishopWuerzburg.html?raw';

export function BishopWuerzburg() {
    return Person({
        name: 'Bishop von Würzburg',
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

