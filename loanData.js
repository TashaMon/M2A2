const loans = [
        {
        id: 0,
        customerName: 'Ronald J Ford',
        phoneNumber: '281-701-6191',
        address: "1113 Brooke Street Houston, Texas(TX), 77026",
        loanAmount: "12453",
        interest: "2.53",
        loanTermYears: "5",
        loanType: "car",
        description: "Car loan for Honda Civic 2020",
        calculatedLoanAmount: function(){
            const interestRatePerMonth = this.interest / 100 / 12;
            const months = this.loanTermYears * 12;
            //monthly payment
            const monthlyPayment = this.loanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, months)) / (Math.pow(1 + interestRatePerMonth, months) - 1);
            //total amount to be paid after years
            const total = monthlyPayment * months;
            // rounds to 2 decimals
            return total.toFixed(2);
        }
    },
    {
        id: 1,
        customerName: "Travis C Smith",
        phoneNumber: "623-255-0936",
        address: "4415 Hillside Street Phoenix, Arizona(AZ), 85003",
        loanAmount: "105000",
        interest: "4.34",
        loanTermYears: "10",
        loanType: "student",
        description: "Student loan for Arizona State University",
        calculatedLoanAmount: function(){
            const interestRatePerMonth = this.interest / 100 / 12;
            const months = this.loanTermYears * 12;
            //monthly payment
            const monthlyPayment = this.loanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, months)) / (Math.pow(1 + interestRatePerMonth, months) - 1);
            //total amount to be paid after years
            const total = monthlyPayment * months;
            // rounds to 2 decimals
            return total.toFixed(2);
        }
      },
      {
        id: 2,
        customerName: "Bessie L. Maxson",
        phoneNumber: "610-252-8710",
        address: "3360 Tree Top Lane Easton, PA 18042",
        loanAmount: "475332",
        interest: "6.76",
        loanTermYears: "30",
        loanType: "mortage",
        description: "Mortage loan for a $600000 house",
        calculatedLoanAmount: function(){
            const interestRatePerMonth = this.interest / 100 / 12;
            const months = this.loanTermYears * 12;
            //monthly payment
            const monthlyPayment = this.loanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, months)) / (Math.pow(1 + interestRatePerMonth, months) - 1);
            //total amount to be paid after years
            const total = monthlyPayment * months;
            // rounds to 2 decimals
            return total.toFixed(2);
        }
      },
      {
        id: 3,
        customerName: "Yumi Sachiko",
        phoneNumber: "916-551-1861",
        address: "4197 Park Avenue Sacramento, CA 95814",
        loanAmount: "14770",
        interest: "3.94",
        loanTermYears: "6",
        loanType: "personal",
        description: "Personal loan",
        calculatedLoanAmount: function(){
            const interestRatePerMonth = this.interest / 100 / 12;
            const months = this.loanTermYears * 12;
            //monthly payment
            const monthlyPayment = this.loanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, months)) / (Math.pow(1 + interestRatePerMonth, months) - 1);
            //total amount to be paid after years
            const total = monthlyPayment * months;
            // rounds to 2 decimals
            return total.toFixed(2);
        }
      },
      {
        id: 4,
        customerName: "Evangelina Naranjo Santillán",
        phoneNumber: "618-955-2443",
        address: "1211 Davis Court Metropolis, IL 62960",
        loanAmount: "8000",
        interest: "3.71",
        loanTermYears: "5",
        loanType: "car",
        description: "Car loan for a Toyota Highlander 2021",
        calculatedLoanAmount: function(){
            const interestRatePerMonth = this.interest / 100 / 12;
            const months = this.loanTermYears * 12;
            //monthly payment
            const monthlyPayment = this.loanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, months)) / (Math.pow(1 + interestRatePerMonth, months) - 1);
            //total amount to be paid after years
            const total = monthlyPayment * months;
            // rounds to 2 decimals
            return total.toFixed(2);
        }
      }
]

for (let i = 0; i < loans.length; i++){
  console.log(loans[i]);
}
loans.forEach((item)=> console.log(item.calculatedLoanAmount()));