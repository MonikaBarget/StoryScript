import {Item} from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './person_mariatheresia.html?raw';

export function person_mariatheresia() {
    return Item({
        name: 'person_mariatheresia', // This is the name used in the game object
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        game.activeCharacter.items.add('person_mariatheresia'); // Use display name here
                        return {
                            text: 'You have added the person_mariatheresia to your notebook!',
                            removeTarget: false
                        };
                    }
                },
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        const exists = game.activeCharacter.items.get('person_mariatheresia'); // Check for display name
                        if (!exists) {
                            return {
                                text: 'Not possible! Try to find a book instead!',
                                removeTarget: false
                            };
                        }
                        return {
                            text: 'person_mariatheresia used successfully.',
                            removeTarget: false
                        };
                    }
                }
            ]
        }
    });
}
