import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import description from './book_moser.html?raw';
import { Combinations } from '../combinations';

export function BookMoser() {
    return Item({
        name: 'book_moser',
        description: description,
        picture: 'resources7book_letter_quill.png',
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(BookMoser)) {
                            return description;
                        }
                        
                        game.activeCharacter.items.add(BookMoser);
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