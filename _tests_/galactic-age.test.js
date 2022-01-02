import GalacticAge from '../src/galactic-age.js';

describe('Age', () => {

  test('should correctly calculate standard age from a birthdate', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.getSolarAge()).toEqual(52);
  });
  test('should correctly convert the age for any planet in our solar system', () => {
    const age = new GalacticAge("7/25/1969");
    age.getSolarAge();
    expect(age.getPlanetAge("Mars")).toEqual(27.9)
  })
  test('should correctly calculate the users remaining life expectancy on a given planet', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYears("Mars")).toEqual(14.5)
  })
});