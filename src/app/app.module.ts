import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service'
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    children: [
      {
        path: ':name',
        component: UserComponent
      }, 
      {
         path: ':name/:id',
         component: UserComponent
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'users/mehulmpt/1',
    pathMatch: 'prefix'
    //component: LoginFormComponent,
  }, 
  {
    path: '**',
    component: NotfoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LoginFormComponent, 
    FooterComponent, 
    DashboardComponent,
    UserComponent,
    NotfoundComponent],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
