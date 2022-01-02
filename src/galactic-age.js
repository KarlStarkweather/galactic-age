export default class GalacticAge {

  constructor(birthDate) {
    this.birthDate = birthDate;
    this.solarAge = 0;
    this.lifeExpectancy = 79.8;
  };

  getSolarAge= () => {
    const d1 = new Date(this.birthDate);
    const d2 = new Date(Date.now());
    const diff = d2.getTime() - d1.getTime();
    this.solarAge = (diff / (1000*60*60*24*365.25));
    // round to make results predictable for testing
    this.solarAge = Math.round(this.solarAge * 10) / 10;
    return Math.floor(this.solarAge)
  }

  getPlanetAge = (planet) => {
    switch(planet) {
      case "Mercury": return (this.adjustAge(.24));
      case "Venus": return (this.adjustAge(.62));
      case "Mars": return (this.adjustAge(1.88));
      case "Jupiter": return (this.adjustAge(11.86));
      default: return this.solarAge;
    }
  };

  yearsExpected = (planet) => {
    return 0;
  };

  adjustAge = (factor) => {
    const newAge = this.solarAge/factor;
    return Math.round(newAge * 10) / 10;
  }
};
