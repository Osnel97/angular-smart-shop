import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './User/profile/profile.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route redirects to Home
{ path: 'home', title: 'SmartShop | Profile', component: HomeComponent },
{ path: 'profile', title: 'SmartShop | Profile', component: ProfileComponent },
{ path: 'employee', title: 'SmartShop | Employees', component: EmployeeComponent },
{ path: '**', title: 'PageNOtFound', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }