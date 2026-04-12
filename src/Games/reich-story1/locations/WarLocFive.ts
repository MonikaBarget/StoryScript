import { Location } from '../types';
import description from './WarLocFive.html?raw';
import { WarLocTwo } from './WarLocTwo';

export function WarLocFive() {
    return Location({
        name: '1757 War against Prussia',
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
    name: 'French Revolutionary and Napoleonic Wars',
    target: LocWarSix,
}
        ]
    });
}