import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './holyromanempire.html?raw';

export function HolyRomanEmpire() {
    return Item({
        name: 'Empire',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        game.activeCharacter.items.add(target as IItem);

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