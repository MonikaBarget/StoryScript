import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import description from './book_moser.html?raw';
import { Combinations } from '../combinations';

export function book_moser() {
    return Item({
        name: 'On the Constitution of the Imperial Circles',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(book_moser)) {
                            return description;
                        }
                        
                        game.activeCharacter.items.add(book_moser);
                        return { 
                            text: 'The title has been added to your notebook!', 
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });
}