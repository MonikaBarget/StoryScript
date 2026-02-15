import { Location } from '../types';
import description from './Start.html?raw';
// Import the raw HTML for each destination
import warAndDefence from './Location1.html?raw';
import currenciesAndFraud from './Location2.html?raw';
import povertyAndOrder from './Location3.html?raw';
import imperialGovernance from './Location4.html?raw';
import migrationAndEconomies from './Location5.html?raw';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        destinations: [
            {
                name: 'War and imperial defence',
                file: warAndDefence,
            },
            {
                name: 'Currencies and monetary fraud',
                file: currenciesAndFraud,
            },
            {
                name: 'Poverty and social order',
                file: povertyAndOrder,
            },
            {
                name: 'Imperial governance and law',
                file: imperialGovernance,
            },
            {
                name: 'Migration and cross-border economies',
                file: migrationAndEconomies,
            },
        ],
    });
}
