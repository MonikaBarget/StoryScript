import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import description from './jostdenegker.html?raw';
import { Combinations } from '../combinations';

export function JostdeNegker() {
    return Item({
        name: 'Jost de Negker',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return { 
                            text: 'Add this person to your notebook to learn more!', 
                            removeTarget: false
                            };
                        }
                        game.activeCharacter.items.add(target as IItem);
                        return { 
                            text: 'You can now view a detailed description in your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });
}