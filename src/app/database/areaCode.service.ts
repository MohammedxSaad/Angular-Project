import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAreaCode } from "./areaCodeInt";

@Injectable()

export class areaCodeService{
    constructor(private http:HttpClient){

    }
    getAreaCode() :Observable<IAreaCode[]>{
        return this.http.get<IAreaCode[]>('https://localhost:7204/api/AreaCode/GetAllAreaCodes?pageIndex=1&pageSize=20');
    }
    storeAreaCode(user:{}){
        return this.http.post('https://localhost:7204/api/AreaCode/CreateNewAreaCode', user);
    }
    putAreaCode(editUser:{}){
        return this.http.put('https://localhost:7204/api/AreaCode/EditAreaCode' , editUser);
    }
    deleteAreaCode(id:number){
        return this.http.delete('https://localhost:7204/api/AreaCode/DeleteAreaCode?AreaCodeId='+id)
    }
}