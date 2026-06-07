import { IGame, IPerson, Person } from '../types';
import description from './JohannPhilipp.html?raw';

export function JohannPhilipp() {
    return Person({
        name: 'Johann Philipp von Greiffenclau Vollraths',
        description: description,
        source: {
            name: 'Gemeinsame Beyhülff und Zusammentrettung',
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb00099130%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=18%2C1472%2C6757%2C3051&r=0" width="640" height="480" allowfullscreen frameborder="0" title="NAchdemahlen sämtl. Chur-Fürsten und Ständen der Associirten vier vorderen Löblichen Reichs-Creyßen zur Genüge bekandt, was massen durch öffene und reiterirte Patenten kundbahr gemachet und nachdrücklich anerinnert worden, wie mann, durch gemeinsame Beyhülff und Zusammentrettung, das noch immerhin in diesen Creyßen hin- und wider vagirende ruchlose und dem Gemeinen Wesen höchstschädliche Zigeuner, Jauner, Bettel-Juden und anderes Herrnlose Diebs Gesind (wordurch dann auch gemeiniglich allerhand ansteckende Kranckheiten beygebracht zu werden pflegen) ausrotten und dieser Creyßen Landen davon säubern möge ..."></iframe>'
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