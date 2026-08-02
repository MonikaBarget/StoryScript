import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import description from './person_negker.html?raw';
import { Combinations } from '../combinations';

export function PersonNegker() {
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
                            text: 'Jost de Negker has been added to your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });
}