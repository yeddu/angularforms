export interface IEmployee {
  firstName: string;
  lastName: string;
  isFullTime: boolean;
  paymentType: string;
  primaryLanguage: string;
}

export class Employee implements IEmployee {
  constructor(public firstName: string,
    public lastName: string,
    public isFullTime: boolean,
    public paymentType: string,
    public primaryLanguage: string) {  }
}
