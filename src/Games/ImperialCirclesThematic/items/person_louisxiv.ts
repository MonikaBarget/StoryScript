import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './person_louisxiv.html?raw'
 
export function PersonLouisXIV() {
    return Item({
        name: 'Louis XIV of France',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(PersonLouisXIV)) {
                            return { 
                            text: 'Good choice!', 
                            removeTarget: false
                        };
                        }
                        
                        game.activeCharacter.items.add(PersonLouisXIV);
                        return { 
                            text: 'Louis XIV of France has been added to your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    })
}