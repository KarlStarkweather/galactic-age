export default class GalacticAge {

  constructor(birthDate) {
    this.birthDate = birthDate;
    this.solarAge = 0;
  };

  getSolarAge= () => {
    const d1 = new Date(this.birthDate);
    const d2 = new Date(Date.now());
    const diff = d2.getTime() - d1.getTime();
    this.solarAge = (diff / (1000*60*60*24*365.25));
    this.solarAge = Math.round(this.solarAge * 10) / 10;
    console.log(this.solarAge);
    return Math.floor(this.solarAge)
  }

  getPlanetAge = (planet) => {
    return("don't know");
  };
};
