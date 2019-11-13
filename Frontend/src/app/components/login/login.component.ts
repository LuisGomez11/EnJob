import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role = '';
  
  constructor(private auth: AuthAdmineService, private router: Router) { }


  constructor() { }





  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }


  onLogin(form): void {

      this.auth.login(form.value).subscribe(res => {
        
          this.router.navigateByUrl('/admin');
        
        
      });

  }






}
