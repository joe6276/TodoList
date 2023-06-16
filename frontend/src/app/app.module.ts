import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertBoxComponent } from './Pipes/alert-box/alert-box.component';
import { PlaceHolderDirective } from './Directives/place-holder.directive';


@NgModule({
  declarations: [
    AppComponent,
    PlaceHolderDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
