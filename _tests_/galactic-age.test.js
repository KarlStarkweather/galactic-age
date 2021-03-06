import GalacticAge from '../src/galactic-age.js';

describe('Age', () => {

  test('should correctly calculate standard age from a birthdate', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.getEarthAge()).toEqual(52.5);
  });
  test('should correctly convert the age for any planet in our earth system', () => {
    const age = new GalacticAge("7/25/1969");
    age.getEarthAge();
    expect(age.getPlanetAge("Mars")).toEqual(27.9)
  })
  test('should correctly calculate the users remaining life expectancy on Mars', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Mars")).toEqual(-14.5)
  })
  test('should calculate remaining life expectancy on a given planet as a positive number if user has exceeded it', () => {
    const age = new GalacticAge("1/1/1922");
    expect(age.expectedYearsRemaining("Mars")).toEqual(10.8)
  }) 
  test('should correctly calculate the users remaining life expectancy on Venus', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Venus")).toEqual(-44)
  })
  test('should correctly calculate the users remaining life expectancy on Jupiter', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Jupiter")).toEqual(-2.3)
  })
  test('should return the users age on Earth is a planet outside of the parameters is entered', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Pluto")).toEqual(-27.3)
  })
  test('should correctly calculate the users remaining life expectancy on Mercury', () => {
    const age = new GalacticAge("7/25/1969");
    expect(age.expectedYearsRemaining("Mercury")).toEqual(-113.7)
  })
});