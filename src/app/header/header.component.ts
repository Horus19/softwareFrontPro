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
import { Subscription } from "rxjs";
@Component({
  selector: "app-header",
  host: {
    class: "uis-layout-header",
  },
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor() {}
  logout(){
    console.log('esto cierra');
  }
  toggleFullscreen(){
    console.log('esto screen full');
  }
}
