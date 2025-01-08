// import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ScreenService {
//   private w_leftWindow = signal(0);
//   private w_rightWindow = signal(0);

//   constructor() { }

//   getLeftWindowSize() {
//     return this.w_leftWindow();
//   }

//   getRightWindowSize() {
//     return this.w_rightWindow();
//   }

//   setWindowsSize() {
//     var w = this.categoryWidget.nativeElement.offsetWidth;
//     var cat_w_padding = 288 + this.PADDING;
//     this.horizontalCatNumber = Math.round(
//       w / cat_w_padding - (w % cat_w_padding) / cat_w_padding
//     );
//     // this.horizontal_cat = this.categoryList.filter(
//     //   (element, index) => index < this.horizontalCatNumber
//     // );
//     this.createCategoriesMatrice();
//     this.dyn_cat_w = Math.min(
//       448,
//       cat_w_padding -
//         this.PADDING +
//         (((w % cat_w_padding) / cat_w_padding) * cat_w_padding) /
//           this.horizontalCatNumber
//     );
//   }
// }
