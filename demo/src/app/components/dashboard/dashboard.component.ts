import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsInterface, RocketsService } from '../../services/rockets.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  rockets: Array<RocketsInterface>=[];
  names: Array<string>=[];
  constructor(private service: RocketsService) {
    this.names=this.service.get();
    this.names.forEach(rocket => {
      this.service.loadOne(rocket).subscribe(dato => {
        this.rockets.push(dato);
      });
    });
    /*service.load().subscribe(datos=>{
      //console.log('Datos recibidos:', datos[0]); // Muestra los datos recibidos
      this.rockets=datos;
    });*/

  }
  
  
  ngOnInit(): void {
    //this.service.load().subscribe(datos => this.rockets = datos);
  }
}
