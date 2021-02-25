import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'TpAngularWissem';
  name: String =""
  imgURL = "https://angular.io/assets/images/logos/angular/angular.png"
  onClick($event:any){
    console.log("ok is clicked",$event);
  }
}
