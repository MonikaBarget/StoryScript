import { IGame, IPerson, Person } from '../types';
import description from './JohannTheodor.html?raw';

export function JohannTheodor() {
    return Person({
        name: 'Johann Theodor',
        description: description,
        source: {
            name: ' ',
            description: '<p>no source added yet</p>'
        },
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
