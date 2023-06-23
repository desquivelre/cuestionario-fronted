import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  public usuarios: Usuario[];

  constructor(private loginService: LoginService , private router: Router) {}

  ngOnInit(): void {

    setTimeout(()=>{
      this.loginService.getUsuarios().subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
        }
      );
    }, 2000);
  }

  login() {
    for(var usuario of this.usuarios){
      if (this.username === usuario.nusuario && this.password === usuario.contrasena) {
        this.router.navigate(['/instrucciones'], { queryParams: { codigousuario: usuario.cusuario }   });
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    }
  }

}
