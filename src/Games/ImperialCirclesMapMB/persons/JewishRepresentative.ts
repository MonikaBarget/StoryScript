import { IGame, IPerson, Person } from '../types';
import description from './JewishRepresentative.html?raw';

export function JewishRepresentative() {
    return Person({
        name: 'Jewish Community Representative',
        description: description,
        source: {
            name: 'Dero Schutz-verwanthen Juden gegen alle der eingeschlichenen Viehe-Seucht halben, angetrohete Trangsalen',
            description: '<iframe src="https://uv-v4.netlify.app/uv.html#?manifest=https%3A%2F%2Fapi.digitale-sammlungen.de%2Fiiif%2Fpresentation%2Fv2%2Fbsb00098712%2Fmanifest&c=0&m=0&cv=0&config=&locales=en-GB%3AEnglish+%28GB%29%2Ccy-GB%3ACymraeg%2Cfr-FR%3AFran%C3%A7ais+%28FR%29%2Cpl-PL%3APolski%2Csv-SE%3ASvenska&xywh=-1229%2C-52%2C7574%2C4419&r=0" width="640" height="480" allowfullscreen frameborder="0" title="DEmnach der hochwürdigste deß H. R. Reichs Fürst und Herr, Herr Johann Philipp, Bischoff zu Würtzburg und Hertzog zu Francken, [et]c. mißfällig haben wahrnehmen müssen, was massen das dero Schutz-verwanthen Juden gegen alle der eingeschlichenen Viehe-Seucht halben, angetrohete Trangsalen ohnlängst gnädig ertheilten Schutz-Patent nicht gebührend respectiret worden, sondern annoch immerfot mehrere Betrohungen sich dergestalt hervor thun, das es zu würcklichen That-Handlungen, ja gar zu Mord und Todtschlag außbrechen dörffte ..."></iframe>'
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