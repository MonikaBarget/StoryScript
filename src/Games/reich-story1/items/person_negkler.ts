import { Item } from '../types';
import { EquipmentType } from 'storyScript/Interfaces/storyScript';
import description from './person_negker.html?raw';

export function book_moser() {
    return Item({
        name: 'Jost de Negker',
        description: description,
        equipmentType: EquipmentType.Miscellaneous
    });
}