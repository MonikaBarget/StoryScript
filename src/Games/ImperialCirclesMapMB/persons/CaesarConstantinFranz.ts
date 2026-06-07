import { IGame, IPerson, Person } from '../types';
import description from './CaesarConstantinFranz.html?raw';

export function CaesarConstantinFranz() {
    return Person({
        name: 'Caesar Constantin Franz',
        source: {
            name: 'Précis historique de la révolution: Arrivée à liege le 18 août 1789 ; et des causes qui l’ont nécessitée',
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb10275447%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=-1766%2C-259%2C4783%2C2791&r=0" width="560" height="420" allowfullscreen frameborder="0" title="Précis Historique De La Révolution"></iframe>'
        },
        description: description,
        hitpoints: 10,
        canAttack: false,
        items: [],
        quests: [],
        conversation: {
            actions: []
        }
    });
}
