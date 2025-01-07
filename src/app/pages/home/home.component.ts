import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from "@angular/core";
import { Category, categories } from "../../interfaces/category";
import { CategoryComponent } from "../../widgets/skills/category/category.component";
import { Experience, experiences, projects } from "../../interfaces/experience";
import { WorkComponent } from "../../widgets/experiences/work/work.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CategoryComponent, WorkComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  categoryList: Category[] = categories;
  workList: Experience[] = experiences;
  dyn_cat_w: number = 288;
  //horizontal_cat: Category[] = this.categoryList;
  horizontalCatNumber!: number;
  catMatrice!: Category[][];

  w_left_window!: number;
  w_right_window!: number;

  grabber: boolean = false;
  PADDING: number = 20;

  // screens = {
  //   smartphone: "0px",

  //   tablet: "576px",
  //   // => @media (min-width: 576px) { ... }

  //   laptop: "960px",
  //   // => @media (min-width: 960px) { ... }

  //   desktop: "1440px",
  //   // => @media (min-width: 1440px) { ... }
  // };

  os: string = "OS";
  platform: string = "Platforms";
  device: string = "Devices";
  text: string = "// Touch something to know more...";

  constructor() {
    this.w_left_window = (1 / 2) * window.innerWidth - 80;
    this.w_right_window = (1 / 2) * window.innerWidth - 80;
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

  createCategoriesMatrice() {
    var colNumber = Math.ceil(
      this.categoryList.length / this.horizontalCatNumber
    );
    this.catMatrice = [];
    for (let i = 0; i < colNumber; i++) {
      this.catMatrice[i] = [];
      this.catMatrice[i] = this.categoryList.filter(
        (element, index) =>
          index >= i * this.horizontalCatNumber &&
          index < (i + 1) * this.horizontalCatNumber
      );
    }
    // transpose the matrice
    var catMatriceTranspose = this.catMatrice[0].map((_, colIndex) =>
      this.catMatrice.map((row) => row[colIndex])
    );
    this.catMatrice = catMatriceTranspose;
    // remove potential undefined element (if not symetric)
    this.catMatrice.map((row) =>
      row.map((element, index) => {
        if (typeof element == "undefined") {
          row.splice(index, 1);
        }
      })
    );
  }

  @HostListener("window:mousemove", ["$event"]) onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (
      this.grabber &&
      this.w_left_window >= 576 &&
      this.w_right_window >= 576
    ) {
      var delta = event.clientX - this.w_left_window - 76;
      this.w_left_window += delta;
      this.w_right_window -= delta;
      var w = this.categoryWidget.nativeElement.offsetWidth;
      var cat_w_padding = 288 + this.PADDING;
      var newHorizontalCatNumber = Math.round(
        w / cat_w_padding - (w % cat_w_padding) / cat_w_padding
      );

      if (newHorizontalCatNumber != this.horizontalCatNumber) {
        this.horizontalCatNumber = newHorizontalCatNumber;
        this.createCategoriesMatrice();
      }
      this.dyn_cat_w = Math.min(
        448,
        cat_w_padding -
          this.PADDING +
          (((w % cat_w_padding) / cat_w_padding) * cat_w_padding) /
            this.horizontalCatNumber
      );
    } else {
      this.grabber = false;
      if (this.w_left_window < 576) {
        this.w_left_window = 576;
      } else if (this.w_right_window < 576) {
        this.w_right_window = 576;
      }
    }
  }

  @HostListener("window:mouseup") onMouseUp() {
    this.grabber = false;
  }

  ngOnInit() {
    var w = window.innerWidth / 2 - 196;
    var cat_w_padding = 288 + this.PADDING;
    this.horizontalCatNumber = Math.round(
      w / cat_w_padding - (w % cat_w_padding) / cat_w_padding
    );
    // this.horizontal_cat = this.categoryList.filter(
    //   (element, index) => index < this.horizontalCatNumber
    // );

    this.createCategoriesMatrice();
    this.dyn_cat_w = Math.min(
      448,
      cat_w_padding -
        this.PADDING +
        (((w % cat_w_padding) / cat_w_padding) * cat_w_padding) /
          this.horizontalCatNumber
    );
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    var w = this.categoryWidget.nativeElement.offsetWidth;
    var cat_w_padding = 288 + this.PADDING;
    this.horizontalCatNumber = Math.round(
      w / cat_w_padding - (w % cat_w_padding) / cat_w_padding
    );
    // this.horizontal_cat = this.categoryList.filter(
    //   (element, index) => index < this.horizontalCatNumber
    // );
    this.createCategoriesMatrice();
    this.dyn_cat_w = Math.min(
      448,
      cat_w_padding -
        this.PADDING +
        (((w % cat_w_padding) / cat_w_padding) * cat_w_padding) /
          this.horizontalCatNumber
    );
  }

  @ViewChild("categoryWidget", { static: false })
  categoryWidget!: ElementRef<HTMLInputElement>;

  changeOS(newOs: string) {
    this.os = newOs;
  }
  changePlatform(newPlatform: string) {
    this.platform = newPlatform;
  }
  changeDevice(newDevice: string) {
    this.device = newDevice;
  }
  changeText(newText: string) {
    this.text = newText;
  }
}
