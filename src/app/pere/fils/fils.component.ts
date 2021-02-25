import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() ordre : string ="test";
  @Input() villeNaissance : string ="test";
  
  constructor() { }

  ngOnInit(): void {
  }

}
