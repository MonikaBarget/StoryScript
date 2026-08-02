import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import description from './book_moser.html?raw';
import { Combinations } from '../combinations';

export function BookMoser() {
    return Item({
        name: 'Book Moser',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                // USE = read the book
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): ICombinationMatchResult => {
                        // General display texts for books!
                        return {
                            text: `Read ${BookMoser.name}!`,
                            removeTarget: false,
                        };
                    }
                },
                // LOOKAT = put into collection
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): ICombinationMatchResult => {
                        // Add the book to the notebook
                        game.activeCharacter.items.add(BookMoser);
                    
                        return {
                            text: `${BookMoser.name} has been added to your notebook!`,
                            removeTarget: false,
                        };
                    }
                },
            ]
        }
    });
}