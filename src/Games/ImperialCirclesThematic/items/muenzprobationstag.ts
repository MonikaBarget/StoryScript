import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './muenzprobationstag.html?raw';
 
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
                                text: 'Good to learn about this !', 
                                removeTarget: false
                            };
                        }
                        
                        game.activeCharacter.items.add(target as IItem);
                        return { 
                            text: 'Open your notebook to learn more!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
