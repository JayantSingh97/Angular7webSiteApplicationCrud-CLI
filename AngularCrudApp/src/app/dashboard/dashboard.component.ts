import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-serivce.service';
import { Router } from '@angular/router';
import { ProductmoduleModule } from '../productmodule/productmodule.module';
import { ToastrService } from 'ngx-toastr';
import { getLocaleDateTimeFormat } from '@angular/common';
import { overrideComponentView } from '@angular/core/src/view';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ProductService]
})

export class DashboardComponent implements OnInit {
  products: ProductmoduleModule[] = [];
  productsmodel: ProductmoduleModule;
  producttoview:ProductmoduleModule[]=[];
  CartItems:ProductmoduleModule[]=[];
  isloading:boolean = false;
  Curenttime =   Date().substring(0,25);
  showproductinfo:boolean = false;
  showCart:boolean = false;
  AllowShowCartbtn:boolean=false;
  totalitmesincart= 0;
  IsApiServiceUp:Boolean=false;


  constructor(private readonly productservice: ProductService, private readonly router: Router,
    private toastr: ToastrService) {
    this.productsmodel = new ProductmoduleModule();
  }
   
  ngOnInit()
  {   
    this.getProducts();  
  }
   
  getProducts() 
  {
     this.isloading = ! this.isloading;
     this.productservice.Get("product")
      .subscribe(result => {
        setTimeout(() => {
          this.isloading = ! this.isloading;
          this.products = result.slice(0,50); 
          this.toastr.success(this.Curenttime.toString(),"Referesh Done."); 
          console.log(this.products) 
          this.checkApiResponse();
        }, 1000); 
      },
      error => {
          this.toastr.error(error.toString() ,' Server error'); 
          this.isloading = ! this.isloading;
          this.checkApiResponse();
      });
  }

  GetProductInformation(id:number)
  { 
      this.producttoview= [];
      this.producttoview.push(this.products.find(p => p.productId === id));
      this.showproductinfo = !this.showproductinfo; 
  }

  AddToCart(id:number)
  {  
     this.CartItems.push(this.products.find(p => p.productId === id));
     this.AllowShowCartbtn = true;
     this.totalitmesincart = this.CartItems.length;
     this.toastr.info("Item(s) Added To Cart Successfully.","Item(S) Added Cart = "+this.totalitmesincart); 
      
  }
  
  showcartitmes()
  {
    this.showCart = !this.showCart;
  }

  RefreshDashboard()
  {  
    this.getProducts(); 
  }
   
  ClearCart()
  { 
         this.CartItems=[];
         this.showCart =  false;
         this.showproductinfo = false; 
         this.AllowShowCartbtn = false;
         this.toastr.info("Cart has been cleared","Cart cleared."); 
         this.router.navigateByUrl("Home");
  }
  greetuser()
  {
    this.CartItems=[];
    this.showCart =  false;
    this.showproductinfo = false; 
    this.AllowShowCartbtn = false;
    this.toastr.info("Thank you for shopping with us have a great day ahead <span class='fa fa-thumbs-up'></span>."); 
    this.router.navigateByUrl("Home");
  }
  GoHome()
  { 
    this.showproductinfo = !this.showproductinfo;
  }
  
  checkApiResponse()
  {
    if(this.products.length <= 0)
    { 
      this.IsApiServiceUp = true;;
    }
    else
    { 
      this.IsApiServiceUp = false;
    }
  }
}
