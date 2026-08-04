import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './law_finalrecess.html?raw';

export function Law7() {
    const item = Item({
        name: 'Final Recess',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {
                                text: 'You are engaging with an important law!',
                                removeTarget: false
                            };
                        }

                        game.activeCharacter.items.add(target as IItem);
                        return {
                            text: 'The Final Recess of the Imperial Diet has been added to your notebook!',
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
