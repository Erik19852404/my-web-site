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
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateX(5%)' }),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateX(-5%)' }))
      ])
    ])
  ]
})
export class ContactsComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
  }
}