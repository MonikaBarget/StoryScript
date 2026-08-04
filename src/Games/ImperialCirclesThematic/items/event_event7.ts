import { Item } from '../types';
import { EquipmentType, ICombinationMatchResult, IItem } from 'storyScript/Interfaces/storyScript';
import { Combinations } from '../combinations';
import description from './event_event7.html?raw';

export function Event7() {
    const item = Item({
        name: 'Event7',
        description: description,
        equipmentType: EquipmentType.Miscellaneous,
        combinations: {
            combine: [
                {
                    combinationType: Combinations.LOOKAT,
                    match: (game, target, tool): string | ICombinationMatchResult => {
                        if (game.activeCharacter.items.get(target as IItem)) {
                            return {
                                text: 'It is wise to learn more about this event!',
                                removeTarget: false
                            };
                        }

                        game.activeCharacter.items.add(target as IItem);
                        return {
                            text: 'The Event7 has been added to your notebook!',
                            removeTarget: false
                        };
                    }
                },
            ]
        }
    });

    return item;
}
