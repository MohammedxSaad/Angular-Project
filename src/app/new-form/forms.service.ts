import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs-compat/operator/map";
import { Pipe } from "@angular/core";
import { Iform } from "./formint";
import { Observable } from "rxjs";
@Injectable()

export class FormsService{
    

   
    constructor(private http:HttpClient){
        
    }
    storeForms(forms: any[]){
        return this.http.post('https://test-9d8da-default-rtdb.firebaseio.com/data.json', forms);


    }
      getForms() :Observable<Iform[]> {
        return this.http.get<Iform[]>('https://jsonplaceholder.typicode.com/posts')
        
      }
      
      
        
}