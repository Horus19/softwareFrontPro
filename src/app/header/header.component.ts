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
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  logout(){
    console.log('esto cierra');
  }
  toggleFullscreen(){
    console.log('esto screen full');
  }
}
