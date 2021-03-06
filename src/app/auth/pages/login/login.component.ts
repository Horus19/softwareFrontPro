import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { end } from '@popperjs/core';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;
  usuario: Usuario | undefined;
  public loginForm = this.fb.group({
    Usuario: [ '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });


  constructor( private router: Router,
               private fb: FormBuilder,
               private authService: AuthService,
               private ngZone: NgZone,
               private _snackBar: MatSnackBar ) { 
                this.usuario = new Usuario();
               }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    this.usuario!.username = this.loginForm.value.Usuario;
    this.usuario!.password = this.loginForm.value.password;
    if (this.usuario?.username == null || this.usuario?.password == null) {
      //Swal('Error Login', 'Username o password vacías!', 'error');
      console.log('credenciales vacias');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      //console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      // TODO: definir ruta luego del login
      this.router.navigate(['/general']);
      //console.log('inicio con exito');
      //swal('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
       // console.log('credenciales incorrectas');
        // this._snackBar.open('Usuario o clave incorrectas!!', 'OK', {
        //   duration: 4 * 1000,
        //   horizontalPosition: end,
        //   // verticalPosition: top

        // });
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}


