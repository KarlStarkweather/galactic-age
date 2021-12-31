import GalacticAge from '../src/galactic-age.js';

describe('Age', () => {

  test('should correctly calculate standard age from a birthdate', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.getSolarAge()).toEqual(52);
  });


});