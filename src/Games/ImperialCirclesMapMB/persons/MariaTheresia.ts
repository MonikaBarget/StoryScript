import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia.html?raw';

export function MariaTheresia() {
    return Person({
        name: 'Maria Theresia',
        description: description,
        source: {
            name: 'Zuschrifft an Ihro Röm. Kayserliche auch zu Hungarn und Böheim Königl. Majestät, von des Nieder-Rhein-Westphälischen Creyßes Ausschreibender Herren Fürsten und Directoren zu Cölln anweesenden Directorial-Räthen und Gesandten',
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb10326330%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=-2717%2C-347%2C7906%2C4613&r=0" width="560" height="420" allowfullscreen frameborder="0" title="Zuschrifft an Ihro Röm. Kayserliche auch zu Hungarn und Böheim Königl. Majestät, von des Nieder-Rhein-Westphälischen Creyßes Ausschreibender Herren Fürsten und Directoren zu Cölln anweesenden Directorial-Räthen und Gesandten"></iframe>'
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
