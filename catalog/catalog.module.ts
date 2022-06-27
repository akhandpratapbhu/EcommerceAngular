import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category/category.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import{Ng2SearchPipeModule}from 'ng2-search-filter';


@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent,
    CategoryComponent,
    AllcategoryComponent,
    AddProductComponent,
    ReadProductComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,
  ],
  exports: [
    ListComponent,DetailsComponent,CategoryComponent,AllcategoryComponent
  ]
})
export class CatalogModule { }
