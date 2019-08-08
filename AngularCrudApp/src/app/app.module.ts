import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../app/product-serivce.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

  
const Routes: Routes = [
  { path: 'Home',      component: DashboardComponent}, 
  { path: 'Products', component: ProductsComponent }, 
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,  
    BrowserAnimationsModule, 
    ToastContainerModule,
    ToastrModule.forRoot({ 
    timeOut: 2000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressAnimation:'decreasing',
    progressBar:true,
    easing:'ease-in',
    enableHtml:true,  
    }),
    RouterModule.forRoot(Routes,  { enableTracing: true } ), 
    BrowserModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
   
})
export class AppModule { }
