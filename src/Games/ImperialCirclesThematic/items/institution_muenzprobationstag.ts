import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './institution_muenzprobationstag.html';
 
export function Muenzprobationstag() {
    const item = Item({
        name: 'Münzprobationstag',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {    
                                text: 'Good to learn about this institution!', 
                                removeTarget: false
                            };
                        }
                        
                        game.activeCharacter.items.add(target as IItem);
                        return { 
                            text: 'Münzprobationstag has been added to your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
