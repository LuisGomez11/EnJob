import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  role = '';
  
  constructor(private auth: AuthAdmineService, private router: Router) { }
=======

  constructor() { }
<<<<<<< HEAD
>>>>>>> parent of 3715302... login
=======
>>>>>>> parent of 3715302... login

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }
<<<<<<< HEAD
<<<<<<< HEAD
  onLogin(form): void {

      this.auth.login(form.value).subscribe(res => {
        
          this.router.navigateByUrl('/admin');
        
        
      });

  }
=======

>>>>>>> parent of 3715302... login
=======

>>>>>>> parent of 3715302... login
}
