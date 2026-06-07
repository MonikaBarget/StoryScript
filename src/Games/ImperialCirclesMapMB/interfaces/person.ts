
import { IPerson as StoryScriptIPerson, Person as StoryScriptPerson } from 'storyScript/Interfaces/storyScript';
import { IEnemy, IItem, IQuest } from '../types';

export function Person(entity: IPerson): IPerson {
    return StoryScriptPerson(entity as any) as IPerson;
}

export interface IPerson extends IEnemy, StoryScriptIPerson {
    uniqueId?: string;
    items?: IItem[];
    quests?: IQuest[];
    source?: any;
}
