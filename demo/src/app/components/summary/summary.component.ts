import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RocketsInterface } from '../../services/rockets.service';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [NgClass],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() rocket: RocketsInterface={
    rocket_id:'',
    rocket_name:'',
    country: '',
    height: {meters:0, feet:0},
    flickr_images: [],
  };


  isNegative(){
    
    return  (this.rocket && this.rocket.height.meters<50);
  }
  isPositive(){
    return  (this.rocket && this.rocket.height.meters>50);
  }
}
