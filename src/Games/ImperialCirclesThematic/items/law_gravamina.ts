import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './law_gravamina.html?raw';

export function Law4() {
    const item = Item({
        name: 'Gravamina',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {
                                text: 'You are engaging with an important legal tradition!',
                                removeTarget: false
                            };
                        }

                        game.activeCharacter.items.add(target as IItem);
                        return {
                            text: 'Gravamina have been added to your notebook!',
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
