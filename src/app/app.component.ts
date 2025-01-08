import { Component, HostListener, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
//import { ScreenService } from "./services/screen.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
 // constructor(private screenService: ScreenService) {}

  // ngOnInit(): void {
  //   this.screenService.setWindowsSize();
  // }

  // @HostListener("window:resize", ["$event"])
  // onWindowResize() {
  //   this.screenService.setWindowsSize();
  // }
}
