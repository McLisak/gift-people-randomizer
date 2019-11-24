export class GiftPeopleRandomizer {
  /**
   *
   * @param {string[]} people
   */
  constructor(people) {
    this.people = people || ['a', 'b'];
    this.result = [];
  }

  _randomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  match() {
    const buysIndex = this._randomIndex(this.buyingPeople.length);
    let getsIndex = this._randomIndex(this.gettingPeople.length);
    const buys = this.buyingPeople[buysIndex];
    let gets = this.gettingPeople[getsIndex];
    if (buys === gets) {
      getsIndex = getsIndex === this.gettingPeople.length - 1 ? 0 : ++getsIndex;
      gets = this.gettingPeople[getsIndex];
    }
    this.buyingPeople.splice(buysIndex, 1);
    this.gettingPeople.splice(getsIndex, 1);
    const result = { buys, gets };
    this.result.push(result);
    return result;
  }

  matchAll() {
    this.resetPeople();
    this.result = [];
    this.people.forEach(() => this.match());
    return this.result;
  }

  resetPeople() {
    this.buyingPeople = Array.from(this.people);
    this.gettingPeople = Array.from(this.people);
  }
}
