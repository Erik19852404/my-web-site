import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
keyframes,
  //..
} from '@angular/animations';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css'],
  animations: [
    trigger('divTrigger', [
      transition('* <=> *', [
        animate('1s ease-in-out', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0.8 }),
        ]))
      ]),      
    ]),
  ]
})
export class SevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}