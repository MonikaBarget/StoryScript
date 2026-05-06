import { ICharacter } from 'storyScript/Interfaces/storyScript';
import { IItem, IEquipment } from './types';

export class Character implements ICharacter {
    name: string = 'Score';
    hitpoints: number = 10;
    currentHitpoints: number;

    // Add character properties here.

    items: IItem[] = [];

    equipment: IEquipment = {};

    constructor() {
        this.equipment = {
            // Remove the slots you don't want to use. Remove them from your IEquipment interface too!
            leftHand: null,
            rightHand: null,
            // Add your custom slots here. Make sure they are also present in your IEquipment interface.
        }
    }
}
