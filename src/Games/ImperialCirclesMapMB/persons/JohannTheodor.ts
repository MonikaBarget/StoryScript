import { IGame, IPerson, Person } from '../types';
import description from './JohannTheodor.html?raw';

export function JohannTheodor() {
    return Person({
        name: 'Johann Theodor',
        description: description,
        source: {
            name: "'Reflexions Sur La Reponse De Sa Majesté L'Imperatrice Reine (...) Aux Ministres des SS. Princes Directeurs Du Cercle De Westphalie'",
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb11299472%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=-2273%2C-255%2C6856%2C4000&r=0" width="560" height="420" allowfullscreen frameborder="0" title="Reflexions Sur La Reponse De Sa Majesté"></iframe>'
        },
        hitpoints: 10,
        canAttack: false,
        items: [
        ],
        quests: [
        ],
        conversation: {
            actions: [
            ]
        },
    });
}