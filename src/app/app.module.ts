import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchempComponent } from './searchemp/searchemp.component';

const MyRoute=[
  {
    path:"",
    component:AddempComponent
  },
  {
    path:"viewemp",
    component:ViewempComponent
  },
  {
    path:"searchemp",
    component:SearchempComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewempComponent,
    NavbarComponent,
    SearchempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(MyRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
