import { Component, Input } from "@angular/core";
import { Experience } from "../../../interfaces/experience";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-work",
  standalone: true,
  imports: [],
  animations: [
    trigger("toggle", [
      transition(":enter", [
        style({ height: '0', opacity: 0 }),
        animate("0.25s ease-in", style({ height: "*", opacity: 1 })),
      ]),
      transition(":leave", [
        style({ height: "*", opacity: 1 }),
        animate("0.25s ease-in", style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
  templateUrl: "./work.component.html",
  styleUrl: "./work.component.css",
})
export class WorkComponent {
  @Input() work!: Experience;
  expanded: boolean = false;

  expand() {
    this.expanded = !this.expanded;
  }
}
