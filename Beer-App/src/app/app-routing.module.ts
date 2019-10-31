import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BeerListComponent } from './beer-list/beer-list.component';


const routes: Routes = [
  {path:"", component: BeerListComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent}  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
