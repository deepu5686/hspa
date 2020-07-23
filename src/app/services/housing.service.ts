import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproperty } from '../property/Iproperty.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAll(sellrent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json')
      .pipe(map(
        data => {
          const propertiesArray: Array<Iproperty> = [];

          for(let id in data){
            if(data.hasOwnProperty(id) && data[id].sellrent === sellrent){
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        }
      ))
  }
}
