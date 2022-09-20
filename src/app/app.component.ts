import { Component } from '@angular/core';
import{Employee} from './employee.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';

  empleados:Employee[]=[
    new Employee("Mauro", "Viale","Periodista",100),
    new Employee("Mirtha","Legrand","Momia",200),
    new Employee("Elon", "Musk","CEO",2000),
    new Employee("Leo", "Messi","Futbolista",1000),
    new Employee("Leo", "Da Vinci","Inventor",50)
  ];

  tbName:string="";
  tbLastName:string="";
  tbPosition:string="";
  tbSalary:number=0;
  
  add(){
    this.empleados.push(new Employee(this.tbName,this.tbLastName,this.tbPosition,this.tbSalary))
    this.empleados = this.empleados.sort((x:Employee, y:Employee)=>{
      if(x.firtsName>y.firtsName) return 1;
      else if(x.firtsName<y.firtsName) return -1
      else return 0;
    })
  }

  rem(n:Employee){
    let ind:number =this.empleados.indexOf(n)
    this.empleados.splice(ind,1);
  }
}
