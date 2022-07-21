import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { GladiatrixComponent } from './gladiatrix/gladiatrix.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruiterComponent,
    GladiatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
