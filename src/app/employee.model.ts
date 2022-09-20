export class Employee{
    static idGen:number=0;
    constructor(firstName:string,lastName:string,Position:string,salary:number){
        this.firtsName=firstName;
        this.lastName=lastName;
        this.position=Position;
        this.salary=salary;
        this.id=Employee.idGen;
        Employee.idGen++;
    }
    
    id:number=0;
    firtsName:string="";
    lastName:string="";
    position:string="";
    salary:number=0;
}