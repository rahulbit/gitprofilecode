import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import {FormsModule }  from '@angular/forms'
import {CommonModule }  from '@angular/common'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { AppService } from './app.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyfilterPipe } from './myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeviewComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'home' , component:HomeviewComponent},
      {path:'' , redirectTo:'home', pathMatch:'full'}
    ])

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
