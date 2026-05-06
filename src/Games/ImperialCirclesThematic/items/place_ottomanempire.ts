import description from './place_ottomanempire.html?raw';
import { createNotebookItem } from './createNotebookItem';

export function PlaceOttomanEmpire() {
    return createNotebookItem({
        name: 'Ottoman Empire',
        description: description,
        addedText: 'The Ottoman Empire has been added to your notebook!',
        missingText: 'Add this place to your notebook to learn more!'
    });
}