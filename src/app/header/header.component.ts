import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  ChangeDetectorRef,
  NgZone,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/pages/login/auth.service";
@Component({
  selector: "app-header",
  host: {
    class: "uis-layout-header",
  },
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit{
  logueado: Boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.logueado = true;
    }
    
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  toggleFullscreen(){
    console.log('esto screen full');
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  login(){
    this.router.navigate(['/auth/login']);
  }
}
