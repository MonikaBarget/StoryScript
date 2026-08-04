import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import description from './bookmoser.html?raw';
import { Combinations } from '../combinations';

export function BookMoser() {
    return Item({
        name: 'Von der teutschen Reichsverfassung',
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
                            text: `A scan of the original text will open in the viewer!`,
                            removeTarget: false,
                        };
                    }
                },
                // LOOKAT = put into collection
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): ICombinationMatchResult => {
                        // Add the book to the notebook
                        game.activeCharacter.items.add(target as IItem);
                    
                        return {
                            text: `You can now open ${Item.name} from your notebook and read a scan of the original!`,
                            removeTarget: false,
                        };
                    }
                },
            ]
        }
    });
}