import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './person_mariatheresia.html?raw';

export function PersonMariaTheresia() {
    return Item({
        name: 'Maria Theresia of Austria',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        game.activeCharacter.items.add(PersonMariaTheresia);

                        return {
                            text: 'You have added Maria Theresia to your notebook!',
                            removeTarget: false
                        };
                    }
                },
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        const exists = game.activeCharacter.items.get(PersonMariaTheresia);

                        if (!exists) {
                            return {
                                text: 'Not possible! Try to find a book instead!',
                                removeTarget: false
                            };
                        }

                        return {
                            text: 'Holy Roman Empire used successfully.',
                            removeTarget: false
                        };
                    }
                }
            ]
        }
    });
}