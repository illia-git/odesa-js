class DateFormatter {
    static format(date: Date, format: string = "default"): string {
      const day: string = date.getDate().toString().padStart(2, "0");
      const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
      const year: number = date.getFullYear();
  
      switch (format) {
        case "dd-mm-yy":
          return `${day}-${month}-${year}`;
        case "yy-mm-dd":
          return `${year}-${month}-${day}`;
        case "default":
          return date.toDateString();
        default:
          throw new Error("Unknown format provided");
      }
    }
  }
  
  export default DateFormatter;
  