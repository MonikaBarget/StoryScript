import { IGame, IPerson, Person } from '../types';
import description from './MariaTheresia2.html?raw';

export function MariaTheresia2() {
    return Person({
        uniqueId: 'MariaTheresia2',
        name: 'Maria Theresia',
        description: description,
        source: {
            name: 'Cartel Zwischen Ihro Königlichen Majestät zu Hungarn und Böheim [et]c. [et]c. Dann Hohen Herren Fürsten und Ständen des Löblichen Fränckischen Crayses wegen Ausliefferung derer Deserteurs und anderen Militarischen Missethäteren',
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb10490100%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=-2831%2C-297%2C7976%2C4654&r=0" width="560" height="420" allowfullscreen frameborder="0" title="Cartel Zwischen Ihro Königlichen Majestät zu Hungarn und Böheim [et]c. [et]c. Dann Hohen Herren Fürsten und Ständen des Löblichen Fränckischen Crayses wegen Ausliefferung derer Deserteurs und anderen Militarischen Missethäteren"></iframe>'
        },
        hitpoints: 10,
        canAttack: false,
        items: [],
        quests: [],
        conversation: {
            actions: []
        }
    });
}