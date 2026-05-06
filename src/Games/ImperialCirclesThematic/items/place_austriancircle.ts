import {Item} from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './place_austriancircle.html?raw';

export function place_austriancircle() {
    return Item({
        name: 'Austrian Imperial Circle', // This is the name used in the game object
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        game.activeCharacter.items.add('Austrian Imperial Circle'); // Use display name here
                        return {
                            text: 'You have added the Austrian Imperial Circle to your notebook!',
                            removeTarget: false
                        };
                    }
                },
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        const exists = game.activeCharacter.items.get('Austrian Imperial Circle'); // Check for display name
                        if (!exists) {
                            return {
                                text: 'Not possible! Try to find a book instead!',
                                removeTarget: false
                            };
                        }
                        return {
                            text: 'Austrian Imperial Circle used successfully.',
                            removeTarget: false
                        };
                    }
                }
            ]
        }
    });
}
