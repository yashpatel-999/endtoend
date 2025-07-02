import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'about',component: AboutComponent},
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'login',component:LoginComponent}
];
