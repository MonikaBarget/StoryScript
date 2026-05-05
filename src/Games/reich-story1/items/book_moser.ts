import { Item } from '../types';
import { EquipmentType } from 'storyScript/Interfaces/storyScript';
import description from './book_moser.html?raw';

export function Flask() {
    return Item({
        name: 'On the Constitution of the German Imperial Circles',
        description: description,
        equipmentType: EquipmentType.Miscellaneous
    });
}
