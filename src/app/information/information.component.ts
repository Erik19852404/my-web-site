import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateX(-50%)' }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(50%)' }))
      ])
    ]),
    trigger('flyInOut2', [
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
export class InformationComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  OpenFB(){
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),
      'Поделиться',
      'resizable,scrollbars,status'); 
    return false;
  }

  OpenVK(){
    window.open(
      'https://vk.com/share.php?url=http://mysite.com'+encodeURIComponent(location.href),
      'Поделиться',
      'resizable,scrollbars,status'); 
    return false;
  }

  OpenOK(){
    let hrefOK = 'https://connect.ok.ru/offer?url=' + window.location.href;
    window.open(
      hrefOK, 
      'Поделиться',
      'resizable,scrollbars,status'); 
    return false;
  }

  OpenWhatsApp(){
    let hrefTel = 'whatsapp://send?text=' + window.location.href;
    window.open(
      hrefTel, 
      'Поделиться',
      'resizable,scrollbars,status'); 
    return false;
  }

  OpenTelegram(){
    let hrefTel = 'https://t.me/share/url?url=' + window.location.href;
    window.open(
      hrefTel, 
      'Поделиться',
      'resizable,scrollbars,status'); 
    return false;
  }
}