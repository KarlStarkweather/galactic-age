import GalacticAge from '../src/galactic-age.js';

describe('Age', () => {

  test('should correctly calculate standard age from a birthdate', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.getEarthAge()).toEqual(52);
  });
  test('should correctly convert the age for any planet in our earth system', () => {
    const age = new GalacticAge("7/25/1969");
    age.getEarthAge();
    expect(age.getPlanetAge("Mars")).toEqual(27.9)
  })
  test('should correctly calculate the users remaining life expectancy on a given planet', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Mars")).toEqual(14.5)
  })
});