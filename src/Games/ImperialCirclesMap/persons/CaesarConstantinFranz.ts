import { IGame, IPerson, Person } from '../types';
import description from './CaesarConstantinFranz.html?raw';

export function CaesarConstantinFranz() {
    return Person({
        name: 'Caesar Constantin Franz',
        source: '<p>Lemarié, François. Mémoires Véridiques de La Révolution de Liege, Commencée Le 18 Août 1789 [Jusqu’au 18 Août 1789]. [Liège] A Liege, chez Lemarié, dessous La Tour. M.DCC.LXXXIX, 1789.</p>',
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
