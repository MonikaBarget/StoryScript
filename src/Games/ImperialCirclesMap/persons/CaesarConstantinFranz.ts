import { IGame, IPerson, Person } from '../types';
import description from './CaesarConstantinFranz.html?raw';

export function CaesarConstantinFranz() {
    return Person({
        name: 'Caesar Constantin Franz',
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
