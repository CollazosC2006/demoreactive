import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { RocketsService,RocketsInterface } from './services/rockets.service';
import { subscribe } from 'diagnostics_channel';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SummaryComponent,DashboardComponent,ManageComponent,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  rockets: Array<RocketsInterface>=[];
  
  
  
  constructor(service: RocketsService){
    service.load().subscribe(datos=>{
      console.log('Datos recibidos:', datos[0]); // Muestra los datos recibidos
      this.rockets=datos;
    }/*,error => {
      console.error('Error al obtener datos de la API:', error); // Muestra cualquier error
      }*/
    );
  }
  
}
