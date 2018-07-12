import { Component, OnInit } from '@angular/core';
import {Observable }  from 'rxjs'
import {catchError , tap}  from 'rxjs/operators'
import {AppService}  from  './../app.service'

import { MyfilterPipe } from './../myfilter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
 
})
export class HomeviewComponent implements OnInit {

   public getdata;
   public getrepo;
  constructor(public http : AppService) { }

  ngOnInit() {
    
   

    
    this.getdata = this.http.getprofiledata().subscribe(
      data=>{
        console.log(data)
        this.getdata = data;
        console.log(this.getdata);

      },
      error=>{
        console.log('some error occured')
         console.log(error.errorMessage);
      } );

    
     
       this.getrepo = this.http.getrepository().subscribe(

           data=>{
             console.log(data)
             this.getrepo = data;
           },

           error=>{
             console.log('some error occured')
             console.log(error.errorMessage)
           }
       )

  }
   
   

}
