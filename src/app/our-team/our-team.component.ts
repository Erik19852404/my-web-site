import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BtnMgmtService } from '../btn-mgmt.service';
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
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
  animations: [
    trigger('btnTrigger', [
      state('activated', style({
        color:  'white',
        opacity: 0.5,
      })),
      state('deactivated', style({
        opacity: 1,
      })),
      transition('* => deactivated', [
        animate('0.5s 100ms ease-in-out')
      ]),    
      transition('deactivated => activated', [
        animate('0.3s ease-out'),
      ]),    
    ]),
    trigger('divTrigger', [
      transition('* <=> *', [
        animate('100ms ease-in-out', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0.8 }),
        ]))
      ]),      
    ]),
  ]
})
export class OurTeamComponent implements OnInit {
  
  teamMembers = teamMembers;

  constructor(
    private btnMgmt: BtnMgmtService,
  ){}

  ngOnInit() {
  }
  
  activateBtn(btnName){
    this.btnMgmt.activateBtn(btnName);
  }

  getActiveBtn(){
    return this.btnMgmt.getActiveBtn();
  }
}