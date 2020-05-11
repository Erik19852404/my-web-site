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

import { teamMembers } from '../team-members';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css'],
  animations: [
    trigger('divTrigger', [
      transition('* <=> *', [
        animate('1s ease-in-out', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0.8 }),
        ]))
      ]),      
    ])
  ]
})
export class DetailesComponent implements OnInit {
  teamMembers = teamMembers;

  constructor(
  ) { }

  ngOnInit() {
  }
}