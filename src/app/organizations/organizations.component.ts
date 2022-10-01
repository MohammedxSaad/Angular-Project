import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { organServices } from './organ.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  //Organizations List
  iid = 1
  organizations=[{id:this.iid , name:'', address :'' , phoneNumber :'' }]

  //Adding Elements
  user = {name:'' , address:'' , phoneNumber:'' }
  addName=''
  addAddress=''
  addPhoneNumber=''
  addMsg=''
  addErrMsg=''

  //Editting Organizations
  editUser={id:0 , name:'' , address:'' , phoneNumber:'' }
  editId =''
  editName = ''
  editAddress=''
  editPhoneNumber=''
  editMsg=''
  editErrMsg=''

  //Delete Organization
  deleteId =''




  //Get All Organiations
  adminPass=''
  passwordErrMsg=''
  listAppear=false


  constructor(private organServices:organServices, private http:HttpClient) { }

  ngOnInit(): void {
  }
  onGet(){
    if(this.adminPass === '1'){
      this.organServices.getOrganizations().subscribe(data => this.organizations = data)
      this.adminPass = ''
      this.passwordErrMsg = ''
      this.listAppear=true;

    }
    else{
      this.passwordErrMsg = 'Password Entered is Incorret'
      this.adminPass = ''
      this.listAppear=false;
    }
  }
  onAdd(){
    if(this.addName==='' || this.addAddress==='' || this.addPhoneNumber===''){
      this.addErrMsg='Please Fill the Empty Blanks'
      this.addMsg= ''
      
    }
    else{
      this.user ={name:this.addName , address:this.addAddress, phoneNumber:this.addPhoneNumber};
      this.organServices.addOrganization(this.user)
      .subscribe((Response) => console.log(this.user),(error) => console.log(error))
      this.addErrMsg=''
      this.addMsg='Organization Was Addedd Successfully'
      this.addName=''
      this.addAddress=''
      this.addPhoneNumber=''

    }
  }
  onEdit(){
    if(this.editId.length === 0 || this.editName === ''|| this.editAddress === ''|| this.editPhoneNumber ===''){
      this.editErrMsg='Please fill the Empty Blanks'
      this.editMsg = ''
    }
    else{
      this.editUser = {id:parseInt(this.editId) , name:this.editName , address:this.editAddress , phoneNumber:this.editPhoneNumber}
      this.organServices.editOrganization(this.editUser)
      .subscribe((Response) => console.log(this.user),(error) => console.log(error))
      this.editMsg='Organization was Editted Successfully'
      this.editId =''
      this.editErrMsg=''
      this.editName = ''
      this.editAddress=''
      this.editPhoneNumber=''



    }
  }
  onDelete(){
    this.organServices.deleteOrganization(parseInt(this.deleteId)).subscribe((Response) => console.log(this.user),(error) => console.log(error))
  }
}
