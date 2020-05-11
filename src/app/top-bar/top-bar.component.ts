import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BtnMgmtService } from '../btn-mgmt.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selectedBtn;

  constructor(
    private btnMgmt: BtnMgmtService,
  ) { }

  ngOnInit() {
  }

  deactivateBtns(){
    this.btnMgmt.activateBtn('');
  }

}