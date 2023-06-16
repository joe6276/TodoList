import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AlertBoxComponent } from './Pipes/alert-box/alert-box.component';
import { PlaceHolderDirective } from './Directives/place-holder.directive';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  date= new Date()
  next='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
  message:null|string=null
  sub!:Subscription
  @ViewChild(PlaceHolderDirective) alertHost!:PlaceHolderDirective
  constructor( private componentFacory:ComponentFactoryResolver){}
  ShowError(){
    this.message='A Different  Occured'
    // this.createComp(this.message)
  }
  ngOnInit(): void {
    const paintTimings = performance.getEntriesByType('paint')
    const fmp = paintTimings.find(({name})=> name==='first-contentful-paint')
    console.log(`First contentful at: ${fmp?.startTime}`)
  }
  onClose(){
    this.message=null
  }
  createComp(message:string){
    const alertCompFactory= this.componentFacory.resolveComponentFactory(AlertBoxComponent)
    const hostviewContainer = this.alertHost.viewContainerRef
    hostviewContainer.clear()
    const componentRef = hostviewContainer.createComponent(alertCompFactory);
    componentRef.instance.message=message

    this.sub=componentRef.instance.close.subscribe(()=>{
      hostviewContainer.clear()
      this.sub.unsubscribe()
    })
  }
}
