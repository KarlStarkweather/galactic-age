export default class GalacticAge {

  constructor(birthDate) {
    this.birthDate = birthDate;
    this.earthAge = 0;
    this.lifeExpectancy = 79.8;
  };

  getEarthAge= () => {
    const d1 = new Date(this.birthDate);
    const d2 = new Date(Date.now());
    const diff = d2.getTime() - d1.getTime();
    this.earthAge = (diff / (1000*60*60*24*365.25));
    // round to make results more predictable for testing
    this.earthAge = Math.round(this.earthAge * 10) / 10;
    return Math.floor(this.earthAge)
  }

  getPlanetAge = (planet) => {
    switch(planet) {
      case "Mercury": return (this.adjustAge(.24));
      case "Venus": return (this.adjustAge(.62));
      case "Mars": return (this.adjustAge(1.88));
      case "Jupiter": return (this.adjustAge(11.86));
      default: return this.earthAge;
    }
  };

  expectedYearsRemaining = (planet) => {
    const expected = new GalacticAge();
    expected.earthAge = this.lifeExpectancy;
    this.getEarthAge();
    return (expected.getPlanetAge(planet) - this.getPlanetAge(planet));
  };

  adjustAge = (factor) => {
    const newAge = this.earthAge/factor;
    return Math.round(newAge * 10) / 10;
  }
};
