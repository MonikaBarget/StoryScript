import { IGame } from '../types';

export const triggerSecondaryLocation = (game: IGame, data: Record<string, string>, className: string) => {
    const mapLocation = game.currentMap.locations.find(l => l.location === data.location);

    if (mapLocation?.markerElement) {
        mapLocation.markerElement.style.visibility = className;
    }
};
