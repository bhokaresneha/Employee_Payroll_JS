
class EmployeePayroll{
   



    get name(){ return this._name; }
    set name(name){ 
        console.log(name);
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else
            console.log('Name is Incorrect!'); 

    }

    get id(){ return this._id; }
    set id(id){
     let idRegex=RegExp('^[1-9]{1}$');
     if(idRegex.test(id))
    	this._id=id;
     else 
     console.log('id id not valid!');
     }

    get gender(){
        return this._gender;
    }
    set gender(gender){ 
        let genderRegex = RegExp('^[F,M]{1}$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else
        console.log('gender is Incorrect!'); 
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
        console.log('salary is Incorrect!'); 
    }

    // get startDate(){
    //     return this._startDate;
    // }
    // set startDate(startDate){ 
    //     let startDateRegex = RegExp('^  $');
    //     if(startDateRegex.test(startDate))
    //         this._startDate = startDate;
    //     else
    //    throw('date is Incorrect!'); 
    // }

        toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id: "+this.id+", name: "+this.name+", salary:"+this.salary+
        ", gender: "+this.gender+", start date: "+empDate;
    }
}

const createAddressBookData = () => {
    //  let employeePayroll = new EmployeePayroll();
    employeePayroll.name = 'Sneha';
     return employeePayroll.name;
    }
    
let employeePayroll = new EmployeePayroll();
let employeePayrollData = createAddressBookData();
console.log("Fun"+employeePayrollData.toString());



