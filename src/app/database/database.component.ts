import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IfStmt, STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { areaCodeService } from './areaCode.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  iid = 1
   AreaCodes= [{id :this.iid, name:'1' ,prefix:'1'}];
  //  AreaCodes !:[{ id: number, name: string, prefix: string; }] ;

  listAppear = false;

  addingName= ''
  addingPrefix!: string;

  editId ='';
  editName= ''
  editPrefix= ''

  deleteId = ''
 
  user={name:'' , prefix:''}

  editUser={id:0 ,name: '' , prefix: ''}

  addErrMsg = ''
  editErrMsg=''
  deleteErrMsg = ''
  deleteMsg=''
  addMsg='';
  editMsg = ''
  passwordErrMsg = ''

  adminPass=''
   i = 0
   j=0
   editFlag = false;
   deleteFlag=false;

  constructor(private AreaCodeService : areaCodeService,private http:HttpClient) { }

  onGet(){
    if(this.adminPass === '1'){
      this.AreaCodeService.getAreaCode().subscribe(data => this.AreaCodes = data)
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
onSave(){
  if(this.addingName ==='' || this.addingPrefix ==='' ){
    this. addErrMsg = 'Fill in The Empty Blanks'
    this.addMsg=''
  }
  else{
    this.user = {name:this.addingName , prefix:this.addingPrefix}
    this.addErrMsg = '';
    this.addMsg='Your Area Code Was Added Successfully  '
    this.AreaCodeService.storeAreaCode(this.user)
   .subscribe((Response) => console.log(this.user),(error) => console.log(error))
    this.addingName='';
    this.addingPrefix = '';
  }
  
}
onEdit(){
  this.AreaCodeService.getAreaCode().subscribe(data => this.AreaCodes = data)

  if(this.editId === '' || this.editName === '' || this.editPrefix === ''  ){
    this.editErrMsg = 'Fill in The Empty Blanks'
    this.editMsg = ''
  }
  else{
    this.editUser = {id: parseInt(this.editId), name: this.editName, prefix:this.editPrefix}
    while(this.j<this.AreaCodes.length){
      console.log(this.AreaCodes[this.j].id)
      if(parseInt(this.editId) === this.AreaCodes[this.j].id){
        this.editFlag = true
        this.j =0
        break;
      }
      else{
        this.editFlag =false
        this.j++;
       }
    }
    this.j = 0
    this.flagChecker2()
    } 
  }
 
onDelete(){
  this.AreaCodeService.getAreaCode().subscribe(data => this.AreaCodes = data)
  if(this.deleteId === ''){
         this.deleteErrMsg='Fill In the Empty Blanks'
         this.deleteMsg=''
       }
  else{
    while(this.i<this.AreaCodes.length){
      console.log(this.AreaCodes[this.i].id)
      if(parseInt(this.deleteId) === this.AreaCodes[this.i].id){
        this.deleteFlag = true
        this.i =0
        break;
      }
      else{
        this.deleteFlag =false
        this.i++;
       }
    }
    this.i = 0
    this.flagChecker()
    }
  } 
  flagChecker(){
    if(this.deleteFlag === true){
      this.deleteErrMsg=''
      this.AreaCodeService.deleteAreaCode(parseInt(this.deleteId))
      .subscribe((Response) => {console.log(this.editUser); },(error) => {console.log(error);  }  );
      this.deleteMsg='Your Area Code Is Deleted Successfully'
      this.deleteId = ''
      this.deleteFlag = false
    }
    else{
      this.deleteErrMsg='Your Area Code does not exist ,Please Enter a Valid Id '
      this.deleteMsg=''
      this.deleteId= ''
    }
  }
  flagChecker2(){
    if(this.editFlag === true){
      this.editErrMsg=''
      this.AreaCodeService.putAreaCode(this.editUser)
      .subscribe((Response) => {console.log(this.editUser) ;},(error) => {  console.log(error) ; });
      this.editMsg = ' was Editted Successfully'
      this.editId=''
      this.editName=''
      this.editPrefix=''
      this.editFlag=false
    }
    else{
      this.editErrMsg ='Your Area Code Id is Incorrect, Please Enter a Valid Id'
      this.editId=''
      this.editName=''
      this.editPrefix=''
    }
  }
  ngOnInit(): void {
    this.AreaCodeService.getAreaCode().subscribe(data => this.AreaCodes = data)
  }
}
function If(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function idChecker() {
  throw new Error('Function not implemented.');
}

