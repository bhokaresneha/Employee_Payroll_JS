console.log("Employee Payroll Using JS ");
class EmployeePayroll{
    id;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){ return this._name; }
    set name(name){ this._name = name; }

    toString(){
        return "id: "+this.id+" name: "+this.name+" salary:"+this.salary;
    }
}
let employeePayroll = new EmployeePayroll(1, "Mark", 30000);
console.log(employeePayroll.toString());
employeePayrollData.name = "John";
console.log(employeePayroll.toString());