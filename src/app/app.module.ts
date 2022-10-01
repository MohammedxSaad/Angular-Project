import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { InsideSerComponent } from './inside-ser/inside-ser.component';
import { Basic } from './basicHilighter/basic.directive';
import { NewFormComponent } from './new-form/new-form.component';
import { HttpClientModule } from '@angular/common/http';
// import { serverService } from './server.service';
import { StoreModule } from '@ngrx/store';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { AccountService } from './account.service';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { FormsService } from './new-form/forms.service';
import { DatabaseComponent } from './database/database.component';
import { areaCodeService } from './database/areaCode.service';
import { OrganizationsComponent } from './organizations/organizations.component';
import { organServices } from './organizations/organ.service';



const appRoutes: Routes = [
  {path:'home', component: HomeComponent  },
  {path:'new-form', component: NewFormComponent  },
  {path:'anime', component:  AnimationComponent  } ,
  {path:'accounts', component: MyAccountsComponent},
  {path:'inserver' , component: InsideSerComponent},
  {path:'database' , component:DatabaseComponent},
  {path:'organizations' , component:OrganizationsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    InsideSerComponent,
    Basic,
    NewFormComponent,
   
    AnimationComponent,
    HomeComponent,
    MyAccountsComponent,
    NewAccountComponent,
    AccountComponent,
    DatabaseComponent,
    OrganizationsComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    
   
    
  ],
  providers: [AccountService, FormsService, areaCodeService,organServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
