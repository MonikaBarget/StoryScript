import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './spanishsuccession.html?raw';

export function SpanishSuccession() {
    const item = Item({
        name: 'War of the Spanish Succession',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {
                                text: 'It is wise to learn more about this event!',
                                removeTarget: false
                            };
                        }

                        game.activeCharacter.items.add(target as IItem);
                        return {
                            text: 'Consult your notebook to learn more!',
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
