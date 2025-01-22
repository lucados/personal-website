import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from "@angular/core";
import { Category, categories } from "../../interfaces/category";
import { Work, works, Project, projects } from "../../interfaces/experience";
import { WorkComponent } from "../../widgets/experiences/work/work.component";
import { SkillsComponent } from "../../widgets/skills/skills.component";
import { ProjectComponent } from "../../widgets/experiences/project/project.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [WorkComponent, SkillsComponent, ProjectComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  categoryList: Category[] = categories;
  workList: Work[] = works;
  projectList: Project[] = projects;

  isLaptop!: boolean;
  isTablet!: boolean;
  w_left_window!: number;
  w_right_window!: number;

  grabber: boolean = false;
  PADDING: number = 20;
  BIG_MARGIN: number = 44;
  SMALL_MARGIN: number = 20;

  selectedWidgets: string[] = ["skills", "works", "projects", "education"];

  selectWidget(widgetTitle: string) {
    if (this.selectedWidgets.includes(widgetTitle)) {
      var index = this.selectedWidgets.indexOf(widgetTitle);
      this.selectedWidgets.splice(index, 1);
    } else {
      this.selectedWidgets.push(widgetTitle);
    }
  }

  isCatSelected(catTitle: string) {
    return true;
    // if (this.horizontal_cat.map((cat) => cat.title).includes(catTitle)) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  onMouseDown(event: MouseEvent) {
    this.grabber = true;
  }

  @HostListener("window:mousemove", ["$event"]) onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (
      this.grabber &&
      this.w_left_window >= 576 &&
      this.w_right_window >= 576
    ) {
      var delta = event.clientX - this.w_left_window;
      if (
        this.w_left_window + delta >= 576 &&
        this.w_right_window - delta >= 576
      ) {
        this.w_left_window += delta;
        this.w_right_window -= delta;
      }
    } else {
      this.grabber = false;
      if (this.w_left_window < 576 && this.isLaptop) {
        this.w_left_window = 576;
      } else if (this.w_right_window < 576 && this.isLaptop) {
        this.w_right_window = 576;
      }
    }
  }

  @HostListener("window:mouseup") onMouseUp() {
    this.grabber = false;
  }

  ngOnInit() {
    if (window.innerWidth >= 1200) {
      this.isLaptop = true;
      this.isTablet = false;
      this.w_left_window = (1 / 2) * window.innerWidth;
      this.w_right_window = (1 / 2) * window.innerWidth;
    } else {
      this.isLaptop = false;
      this.w_left_window = window.innerWidth;
      this.w_right_window = window.innerWidth;
      window.innerWidth >= 576
        ? (this.isTablet = true)
        : (this.isTablet = false);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    // if computer size
    if (window.innerWidth >= 1200) {
      this.isLaptop = true;
      this.isTablet = false;
      this.w_left_window = (1 / 2) * window.innerWidth;
      this.w_right_window = (1 / 2) * window.innerWidth;
    } else {
      this.isLaptop = false;
      this.w_left_window = window.innerWidth;
      this.w_right_window = window.innerWidth;
      window.innerWidth >= 576
        ? (this.isTablet = true)
        : (this.isTablet = false);
    }
  }

  @ViewChild("categoryWidget", { static: false })
  categoryWidget!: ElementRef<HTMLInputElement>;
}
