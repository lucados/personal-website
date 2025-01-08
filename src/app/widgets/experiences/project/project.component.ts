import { Component, Input } from "@angular/core";
import { Project } from "../../../interfaces/experience";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-project',
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
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;
  expanded: boolean = false;

  expand() {
    this.expanded = !this.expanded;
  }
}
