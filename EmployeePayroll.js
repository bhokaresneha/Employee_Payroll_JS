console.log("Employee Payroll Using JS ");
class EmployeePayroll{
   

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name; }
    set name(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else
        throw('Name is Incorrect!'); 
    }

    get id(){ return this._id; }
    set id(id){
     let idRegex=RegExp('^[1-9]{1}$');
     if(idRegex.test(id))
    	this._id=id;
     else 
     throw('id id not valid!');
     }

    get gender(){
        return this._gender;
    }
    set gender(gender){ 
        let genderRegex = RegExp('^[F,M]{1}$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else
       throw('gender is Incorrect!'); 
    }

    get salary(){
        return this._salary;
    }
    /*      0 as invaid
            1 as valid
            100 as valid
            99909 as valid
            1.2  as valid
            111.77700 as valid */
    set salary(salary){ 
        let salaryRegex = RegExp('^[0-9][1-9.]*[0-9]+[1-9]*$')
        if(salaryRegex.test(salary))
            this._salary = salary;
        else
        throw('salary is Incorrect!'); 
    }
    get startDate(){ return this._startDate; }
    set startDate(startDate){
        if(startDate <= Date.now())
            this._startDate = startDate;
        else throw 'Start date is incorrect!';
    }

        toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id: "+this.id+", name: "+this.name+", salary:"+this.salary+
        ", gender: "+this.gender+", start date: "+empDate;
    }
}
let employeePayroll = new EmployeePayroll(1, "Teresa", 30000, "M", new Date());
console.log(employeePayroll.toString());
//name 
employeePayroll.id = 1;
try {
    employeePayroll.name = "Jo";
    console.log(employeePayroll.toString());
}
catch(e){
    console.error(e);
}
//id
try{
    let newEmployeePayroll = new EmployeePayroll(2.5, "Terrisa", 50000, "F", new Date());
    console.log(newEmployeePayroll.toString());
    }
    catch(e){
        console.error(e);}
//gender
try{
     let newEmployeePayroll = new EmployeePayroll(1, "Terrisa", 60000, "K", new Date());
      console.log(newEmployeePayroll.toString());
    }
    catch(e){
    console.error(e);}
//salary
try{
let newEmployeePayroll = new EmployeePayroll(1, "Terrisa", 30000, "F",new Date());
console.log(newEmployeePayroll.toString());
}
catch(e){
    console.error(e);}

     //date
// date validation
try{
    let newEmployeePayroll = new EmployeePayroll(1, "John", 45000, "M", "June 13, 2025");
    console.log(newEmployeePayroll.toString());
}
catch(e){
    console.log(e);
}
