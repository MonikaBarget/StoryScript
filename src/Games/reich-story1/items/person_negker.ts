import { Item } from '../types';
import { EquipmentType } from 'storyScript/Interfaces/storyScript';
import description from './person_negker.html?raw';

export function person_negker() {
    return Item({
        name: 'Jost de Negker',
        description: description,
        equipmentType: EquipmentType.Miscellaneous
    });
}