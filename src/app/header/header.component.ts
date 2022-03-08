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
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      console.log('logueado');
    }
    
  }
  logout(){
    console.log('esto cierra');
  }
  toggleFullscreen(){
    console.log('esto screen full');
  }

  login(){
    console.log('ss');
    this.router.navigate(['/auth/login']);
  }
}
