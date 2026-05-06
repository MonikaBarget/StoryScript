import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './place_empire.html?raw';

export function PlaceEmpire() {
    return Item({
        name: 'Empire',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        game.activeCharacter.items.add(PlaceEmpire);

                        return {
                            text: 'You have added the Holy Roman Empire to your notebook!',
                            removeTarget: false
                        };
                    }
                },
                {
                    combinationType: Combinations.USE,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        return {
                            text: 'Not possible! Try to find a book instead!',
                            removeTarget: false
                        };
                    }
                }
            ]
        }
    });
}