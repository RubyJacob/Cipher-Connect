import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'signup',component:SignupComponent}
   

];
