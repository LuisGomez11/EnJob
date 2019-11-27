export class Bonification {

  constructor(idBonification = '', incentive = '', cost = '', company = '') {
    this.idBonification = idBonification;
    this.incentive = incentive;
    this.cost = cost;
    this.company = company;
  }

  idBonification: string;
  incentive: string;
  cost: string;
  company: string;

}
