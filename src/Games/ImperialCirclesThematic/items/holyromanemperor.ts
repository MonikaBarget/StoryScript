import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './holyromanemperor.html?raw';
 
export function HolyRomanEmperor() {
    const item = Item({
        name: 'Holy Roman Emperor',
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
