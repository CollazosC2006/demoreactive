import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { retry } from 'rxjs';
import { catchError,throwError } from 'rxjs';

let rockets: Array <string> =['falcon1'];
let serviceUrl: string ='https://api.spacexdata.com/v3/rockets';

export interface RocketsInterface{

  rocket_id:string;
  rocket_name:string;
  country: string;
  height: {meters:number, feet:number},
  flickr_images: Array<string>;

}

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) {   }

  get(){
    return rockets.slice();
  }

  add(rocket: string){
    rockets.push(rocket);
    return this.get();
  }


  remove(rocket: string){
    rockets.splice(rockets.indexOf(rocket),1);
    return this.get();
  }


  load() {
    return this.http.get<Array<RocketsInterface>>(serviceUrl);
  }

  loadOne(name: string){
    return this.http.get<RocketsInterface>(serviceUrl+'/'+name)
  }

}
