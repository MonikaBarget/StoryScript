import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import description from './person_negker.html?raw';
import { Combinations } from '../combinations';

export function person_negker() {
    return Item({
        name: 'Jost de Negker',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(person_negker)) {
                            return description;
                        }
                        
                        game.activeCharacter.items.add(person_negker);
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