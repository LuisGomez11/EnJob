import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('.messages').animate({scrollTop: $(document).height()},"fast");
  }

}
