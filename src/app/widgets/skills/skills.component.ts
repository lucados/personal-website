import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Category, categories } from "../../interfaces/category";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent implements OnChanges, OnInit {
  @Input() widgetWidth!: number;
  @Input() categoryList!: Category[];
  //widgetWidth!: number;
  catMatrice!: Category[][];
  PADDING: number = 20;
  //MARGIN: number = 44;
  minCatWidth: number = 288 + this.PADDING;
  maxCatWidth: number = 428 + this.PADDING;
  categoryWidth!: number;
  horizontalCatNumber!: number;

  constructor() {}

  ngOnInit(): void {
    this.setCategoryWidth();
    this.createCategoriesMatrice();
  }

  ngOnChanges(changes: SimpleChanges) {
    var oldHorizontalCatNumber = this.horizontalCatNumber;
    this.setCategoryWidth();
    if (oldHorizontalCatNumber != this.horizontalCatNumber) {
      this.createCategoriesMatrice();
    }
  }

  setCategoryWidth() {
    this.horizontalCatNumber = Math.floor(
      (this.widgetWidth - this.PADDING) / this.minCatWidth
    );
    this.categoryWidth = Math.min(
      this.maxCatWidth,
      (this.widgetWidth - this.PADDING) / this.horizontalCatNumber -
        this.PADDING
    );
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
}
