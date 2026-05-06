import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';

export function createNotebookItem(config: {
    name: string;
    description: string;
    addedText: string;
    missingText?: string;
}) {
    const item = Item({
        name: config.name,
        description: config.description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        const existing = game.activeCharacter.items.get(config.name);

                        if (!existing) {
                            game.activeCharacter.items.add(item);

                            return {
                                text: config.addedText,
                                removeTarget: false
                            };
                        }

                        return {
                            text: config.missingText ?? 'Add this item to your notebook to learn more!',
                            removeTarget: false
                        };
                    }
                }
            ]
        }
    });

    return item;
}