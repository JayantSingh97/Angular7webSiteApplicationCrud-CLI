import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-serivce.service';
import { Router } from '@angular/router';
import { ProductmoduleModule } from '../productmodule/productmodule.module';
import { ToastrService } from 'ngx-toastr';
import { getLocaleDateTimeFormat } from '@angular/common';
import { overrideComponentView } from '@angular/core/src/view';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  NewProduct:ProductmoduleModule[];
  productcreated:boolean= false;
   

  constructor(private readonly productservice: ProductService, private readonly router: Router,
    private toastr: ToastrService,private formBuilder: FormBuilder) { }

  ngOnInit() {  
  this.registerForm = this.formBuilder.group({  
  productName:['', Validators.required],
  Price:['', Validators.required],  
  isAvailable:['', Validators.required], 
  launchdate:['', Validators.required],
  category:['', Validators.required],
  color:['', Validators.required],
  storage:['', Validators.required],  
  description:['', Validators.required], 
  weight:['', Validators.required], 
  camera:['', Validators.required], 
  display:['', Validators.required],
  processor:['', Validators.required],
  imageUrl:['', Validators.required],

  });  

  }
  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true; 
        if (this.registerForm.invalid) {
            return;
        }  
        this.CreateProduct( this.registerForm.value) 
    }

    CreateProduct(product:any)
    { 
      this.productservice.Post("product",product)
      .subscribe(result => {  
          this.NewProduct = result;
          this.productcreated = !this.productcreated; 
          this.toastr.success("Product Created Successfully.");  
      },
      error => {
          this.toastr.error(error.toString() ,' Server error');   
      });
    }

    DeleteProduct(id:number)
    { 
      this.productservice.Delete("product/?Productid=",id)
      .subscribe(result => {   
          this.toastr.info("Product Deleted Successfully."+result);  
      },
      error => {
          this.toastr.error(error.toString() ,' Server error');   
      });
    }

    EditProduct()
    {
      this.productcreated = !this.productcreated;
    }
}
