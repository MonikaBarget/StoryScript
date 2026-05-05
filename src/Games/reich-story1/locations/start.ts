import { Location, IItem } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { WarLocOne } from './WarLocOne';
import { CurLocOne } from './CurLocOne';
import { PovLocOne } from './PovLocOne';
import { GovLocOne } from './GovLocOne';
import { MigLocOne } from './MigLocOne';
import { Combinations } from '../combinations';
import { book_moser } from '../items/book_moser';
import { person_negker } from '../items/person_negker';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        features: [
            {
                name: 'book_moser',
                combinations: {
                    combine: [
                        {
                            combinationType: Combinations.USE,
                            match: (game, target: IItem, tool): string => {
                                if (target.id === 'book_moser') {
                                   return target.description
                                }
                            return "There is nothing to look at!"; // not the right combination
                            }
                        }
                    ]
                }
            },
            {
                name: 'person_negker',
                combinations: {
                    combine: [
                        {
                            combinationType: Combinations.LOOKAT,
                            match: (game, target: IItem, tool): string => {
                                return target.description;
                            }
                        }
                    ]
                }
            }
        ],
        destinations: [
            {
                name: 'War & Defence',
                target: WarLocOne,
            },
            {
                name: 'Currencies & Fraud',
                target: CurLocOne,
            },
            {
                name: 'Poverty & Social Order',
                target: PovLocOne,
            },
            {
                name: 'Governance & Law',
                target: GovLocOne,
            },
            {
                name: 'Migration & Economies',
                target: MigLocOne,
            },
        ],
    });
}
