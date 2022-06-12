console.log("Employee Payroll Using JS ");
class EmployeePayroll{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name; }
    set name(name){ this._name = name; }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id: "+this.id+", name: "+this.name+", salary:"+this.salary+
        ", gender: "+this.gender+", start date: "+empDate;
    }
}
let employeePayroll = new EmployeePayroll(1, "Mark", 30000);
console.log(employeePayroll.toString());
employeePayroll.id = 0;
employeePayroll.name = "John";
console.log(employeePayroll.toString());

let newEmployeePayroll = new EmployeePayroll(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayroll.toString());