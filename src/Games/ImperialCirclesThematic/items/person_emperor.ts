import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './person_emperor.html?raw';
 
export function PersonEmperor() {
    const item = Item({
        name: 'Person Emperor',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {    
                                text: 'Good choice!', 
                                removeTarget: false
                            };
                        }
                        
                        game.activeCharacter.items.add(target as IItem);
                        return { 
                            text: 'The Holy Roman Emperor has been added to your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
