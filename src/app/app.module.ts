import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
//    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
