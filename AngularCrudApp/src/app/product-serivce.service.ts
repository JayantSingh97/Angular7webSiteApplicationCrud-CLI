import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ProductmoduleModule } from '../app/productmodule/productmodule.module';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  baseurl = 'http://localhost:65009/api/';
 
  constructor(private readonly httpClient: HttpClient) { }
 
  Get(url: string): Observable<any> {  
    return this.httpClient.get(this.baseurl+url)
      .map((response: Response) => response)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }
  
  GetByPram(url: string,parameter:string): Observable<any> {  
    return this.httpClient.get(this.baseurl+url+parameter)
      .map((response: Response) => response)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }
   
  Post(url:string,parameter:any):Observable<any>
  {  
    return this.httpClient.post(this.baseurl+url,parameter)
    .map((response: Response) => response)
    .do(data => JSON.stringify(data))
    .catch(this.handleError);
  }

  Patch(url:string,parameter:any): Observable<any>
  {  
    return this.httpClient.patch(this.baseurl+url,parameter)
    .map((response: Response) => response)
    .do(data => JSON.stringify(data))
    .catch(this.handleError);
  }

  Delete(url:string,id:number)
  {   
    return this.httpClient.delete(this.baseurl+url+id)
    .map((response: Response) => response)
    .do(data => JSON.stringify(data))
    .catch(this.handleError);
  }

  private handleError(error: Response) { 
    console.error(error);  
    return Observable.throw(error)
  }
 
}