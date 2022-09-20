import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  @Input() emp:Employee
  constructor() { }

  @Output() quitar = new EventEmitter<Employee>();
  
  ngOnInit(): void {
  }

quitarElemento(value:Employee){
  this.quitar.emit(value);
}
}
