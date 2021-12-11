import {CO} from "../src/pattern/factory/abstractFactory.interface";
import {Andy} from "../src/pattern/factory/andy";
import {Max} from "../src/pattern/factory/max";


describe('Advance Wars - Abstract factory', () => {
    test('it should allow Andy to create an infantry at 100 power and 100 defense', async () => {
        // Arrange
        const andy: CO = new Andy();

        // Act
        const infantry = andy.makeInfantry();

        // Assert
        expect(infantry.power).toEqual(100);
        expect(infantry.defense).toEqual(100);
    });

    test('it should allow Max to create an infantry at 110 power and 90 defense', async () => {
        // Arrange
        const max: CO = new Max();

        // Act
        const infantry = max.makeInfantry();

        // Assert
        expect(infantry.power).toEqual(110);
        expect(infantry.defense).toEqual(90);
    });
});
