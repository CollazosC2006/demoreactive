import { Component } from '@angular/core';
import { RocketsService } from '../../services/rockets.service';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'manage',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  names: Array<string> ;
  formGroup : FormGroup;

 
  
  constructor(private service: RocketsService) {
    this.names = service.get();
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Validaciones
    });
  }

  add() {
    if (this.formGroup.valid) {
      this.names = this.service.add(this.formGroup.get('name')?.value);
      this.formGroup.reset();
    }else{
      window.alert("Ingrese un nombre valido");
    } 
    
  }
  remove(rocket: string) {
    this.names = this.service.remove(rocket);
  }
}
