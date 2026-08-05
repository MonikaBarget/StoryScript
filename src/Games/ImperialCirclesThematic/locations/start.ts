import { Location } from '../types';
import description from './Start.html?raw';
import { WarLoc0 } from './WarLoc0';
import { CurLoc0 } from './CurLoc0';
import { SciLoc0 } from './SciLoc0';
import { GovLoc0 } from './GovLoc0';
import { MigLoc0 } from './MigLoc0';
import { EcoLoc0 } from './EcoLoc0';
import { SocLoc0 } from './SocLoc0';
import { BookMoser } from '../items/bookmoser';
import { JostdeNegker } from '../items/jostdenegker';
import { HolyRomanEmpire } from '../items/holyromanempire';
import { HolyRomanEmperor } from '../items/holyromanemperor';

export function Start() {
    return Location({
        name: 'Start',
        description: description,
        features: [
            BookMoser(),
            JostdeNegker(),
            HolyRomanEmpire(),
            HolyRomanEmperor()
        ],
        destinations: [
            {
                name: 'War & Defence',
                target: WarLoc0,
            },
            {
                name: 'Currencies',
                target: CurLoc0,
            },
            {
                name: 'Knowledge',
                target: SciLoc0,
            },
            {
                name: 'Governance & Law',
                target: GovLoc0,
            },
            {
                name: 'Mobility',
                target: MigLoc0,
            },
            {
                name: 'Economy',
                target: EcoLoc0,
            },
            {
                name: 'Social Order',
                target: SocLoc0,
            },
        ],
    });
}
