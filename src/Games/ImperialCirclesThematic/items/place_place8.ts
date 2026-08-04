import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './place_place8.html?raw';

export function Place8() {
    const item = Item({
        name: 'Place8',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {
                                text: 'Good to expand your geographical knowledge!',
                                removeTarget: false
                            };
                        }

                        game.activeCharacter.items.add(target as IItem);
                        return {
                            text: 'Place8 has been added to your notebook!',
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
