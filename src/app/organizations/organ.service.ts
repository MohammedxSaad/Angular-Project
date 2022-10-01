import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iorganization } from "./organInt";
@Injectable()

export class organServices{
    constructor(private http:HttpClient){


    }
    getOrganizations() :Observable<Iorganization[]>{
        return this.http.get<Iorganization[]>('https://localhost:7204/api/Organization/GetAllOrganization?pageIndex=1&pageSize=20')
    }
    addOrganization(user:{}){
        return this.http.post('https://localhost:7204/api/Organization/CreateNewOrganization',user)
    }
    editOrganization(editUser:{}){
        return this.http.put('https://localhost:7204/api/Organization/EditOrganization',editUser)

    }
    deleteOrganization(id:number){
        return this.http.delete('https://localhost:7204/api/Organization/DeleteOrganization?organizationId='+id)
    }
}