import { Location } from '../types';
import description from './WarLocOne.html?raw';
import { WarLocTwo } from './WarLocTwo';

export function WarLocOne() {
    return Location({
        name: 'War & Defence',
        description: description,
        destinations: [
            {
    name: 'Wars against the Ottoman Empire',
    target: LocWarTwo,
},
{
    name: 'Military conflicts with Louis XIV, King of France',
    target: LocWarThree,
},
{
    name: 'War of the Polish Succession',
    target: LocWarFour,
},
{
    name: '1757 War against Prussia',
    target: LocWarFive,
},
{
    name: 'French Revolutionary and Napoleonic Wars',
    target: LocWarSix,
}
        ]
    });
}