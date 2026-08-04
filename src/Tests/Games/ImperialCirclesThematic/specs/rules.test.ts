import { describe, test, expect, beforeAll } from 'vitest';
import { BookMoser } from '../../../../Games/ImperialCirclesThematic/items/bookmoser';
import { HolyRomanEmperor } from '../../../../Games/ImperialCirclesThematic/items/holyromanemperor';
import { addArrayExtensions } from 'storyScript/arrayAndFunctionExtensions.ts';

describe("ImperialCirclesThematic rules", function() {

    beforeAll(() => addArrayExtensions());

    test("should add an instantiated book item to the active character's backpack when the look action is used", function() {
        const item = BookMoser();
        const game = {
            activeCharacter: {
                items: []
            }
        } as any;

        const result = item.combinations.combine[1].match(game, item, null) as { text: string };

        expect(result.text).toContain('added to your notebook');
        expect(game.activeCharacter.items).toHaveLength(1);
        expect(game.activeCharacter.items[0]).not.toBe(BookMoser);
        expect(game.activeCharacter.items[0].description).toContain('<iframe');
    });

    test("should add an instantiated person item to the active character's backpack when the look action is used", function() {
        const item = HolyRomanEmperor();
        const game = {
            activeCharacter: {
                items: []
            }
        } as any;

        const result = item.combinations.combine[0].match(game, item, null) as { text: string };

        expect(result.text).toContain('added to your notebook');
        expect(game.activeCharacter.items).toHaveLength(1);
        expect(game.activeCharacter.items[0]).not.toBe(PersonEmperor);
        expect(game.activeCharacter.items[0].description).toContain('The Holy Roman Emperor');
    });

});