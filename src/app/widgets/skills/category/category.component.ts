import { Component, Input } from "@angular/core";
import { Category } from "../../../interfaces/category";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-category",
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
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.css",
})
export class CategoryComponent {
  @Input() dynamic_w: number = 288;
  @Input() category!: Category;
  expanded: boolean = false;
  expand() {
    this.expanded = !this.expanded;
  }

  skillsOfGroup(group: string = "undefined") {
    if (group == "undefined") {
      return this.category.skills.filter((skill) => skill.group == undefined);
    } else {
      return this.category.skills.filter((skill) => skill.group == group);
    }
  }
  selectSkill(id: string) {}

  // os: string = "OS";
  // platform: string = "Platforms";
  // device: string = "Devices";
  // text: string = "// Touch something to know more...";
  // changeOS(newOs: string) {
  //   this.os = newOs;
  // }
  // changePlatform(newPlatform: string) {
  //   this.platform = newPlatform;
  // }
  // changeDevice(newDevice: string) {
  //   this.device = newDevice;
  // }
  // changeText(newText: string) {
  //   this.text = newText;
  // }
}
