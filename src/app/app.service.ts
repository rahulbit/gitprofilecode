import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Observable }    from 'rxjs'
import {catchError , tap}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  constructor(public http : HttpClient) { }
   public url ='https://api.github.com/users/supreetsingh247'
   public url1 ="https://api.github.com/users/supreetsingh247/repos"

  public getprofiledata =():any=>{
     let apiresponse =  this.http.get(this.url)
       console.log(apiresponse)
       return apiresponse;
  }

  public getrepository =():any=>{
    let apiresponse = this.http.get(this.url1)
    console.log(apiresponse)
    return apiresponse
  }
}
