import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class GalleryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GalleryProvider Provider');
  }
  getMovies(): Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/d2174359-4fcd-11e8-9df1-c7388748748b");
}
}



