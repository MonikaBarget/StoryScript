import { Location, IItem } from '../types';
import description from './Start.html?raw';
// Import the location functions (adjust the import paths as needed)
import { WarLocOne } from './WarLocOne';
import { CurLocOne } from './CurLocOne';
import { PovLocOne } from './PovLocOne';
import { GovLocOne } from './GovLocOne';
import { MigLocOne } from './MigLocOne';
import { Combinations } from '../combinations';

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
                                return target.description;
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
