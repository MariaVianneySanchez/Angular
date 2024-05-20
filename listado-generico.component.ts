import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent implements OnInit {
  
  @Input()
  listado: any;
  construtor(){}
  
  ngOnInit(): void {  
  }

}
