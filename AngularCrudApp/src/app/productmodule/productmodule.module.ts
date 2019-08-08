import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ProductmoduleModule
  ]
})

export class ProductmoduleModule {
  
  productId:number
  productName:string;
  Price:string;
  isAvailable:string;
  launchdate:string;
  category:string;
  color:string;
  imageUrl:string;
  description:string;
  weight:string;
  camera:string;
  display:string;
  processor:string;
  storage:string;                  
  ApiResponse:string;
 }
 