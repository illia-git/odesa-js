import DateFormatter from './utils/DateFormatter';
import { AgeDifference } from './types/AgeDifference';

class Odesa {
    private _birthdayDate: Date;
  
    constructor() {
      this._birthdayDate = new Date("September 2, 1794");
    }
  
    get birthday(): string {
      return DateFormatter.format(this._birthdayDate);
    }
  
    get age(): string {
      const now = new Date();
      const { years, months, days } = this._calculateAgeDifference(
        now,
        this._birthdayDate
      );
      return `${years} years, ${months} months, ${days} days`;
    }
  
    private _calculateAgeDifference(
      currentDate: Date,
      birthDate: Date
    ): AgeDifference {
      let years: number = currentDate.getFullYear() - birthDate.getFullYear();
      let months: number = currentDate.getMonth() - birthDate.getMonth();
      let days: number = currentDate.getDate() - birthDate.getDate();
  
      if (days < 0) {
        months--;
        days += new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
      }
  
      if (months < 0) {
        years--;
        months += 12;
      }
  
      return { years, months, days };
    }
  }
  

export default Odesa;
