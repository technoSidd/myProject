import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ReactiveFormsModule} from  '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AbooutComponent } from './aboout/aboout.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AssignExamComponent } from './assign-exam/assign-exam.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { AssignmentComponent } from './assignment/assignment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AbooutComponent,
    AboutComponent,
    HomePageComponent,
    DashboardComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    HodDashboardComponent,
    AddExamComponent,
    AssignExamComponent,
    DropDownComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
     RouterModule.forRoot([
  {
  path: '',
  component : HomePageComponent
  }
  ]),
    RouterModule.forRoot([
  {
  path: 'login',
  component : LoginComponent
  }
  ]),
  RouterModule.forRoot([
  {
  path: 'register',
  component : RegisterComponent
  }
  ]),
   RouterModule.forRoot([
  {
  path: 'about',
  component : AboutComponent
  }
  ]),

  RouterModule.forRoot([
  {
  path: 'dashboard',
  component : DashboardComponent
  }
  ]),
   RouterModule.forRoot([
  {
  path: 'adminDashboard',
  component : AdminDashboardComponent
  }
  ]), RouterModule.forRoot([
  {
  path: 'studentDashboard',
  component : StudentDashboardComponent
  }
  ]), RouterModule.forRoot([
  {
  path: 'hodDashboard',
  component : HodDashboardComponent
  }
  ]),RouterModule.forRoot([
  {
  path: 'addexam',
  component : AddExamComponent
  }
  ]),RouterModule.forRoot([
  {
  path: 'assignexam',
  component : AssignExamComponent
  }
  ]),RouterModule.forRoot([
  {
  path: 'drop-down',
  component : DropDownComponent
  }
  ]),RouterModule.forRoot([
  {
  path: 'assignment',
  component : AssignmentComponent
  }
  ])

  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
