import { IGame, IPerson, Person } from '../types';
import description from './CaesarConstantinFranz.html?raw';

export function CaesarFranzConstantin() {
    return Person({
        name: 'Caesar Franz Constantin',
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
