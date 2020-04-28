import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import {LoginComponent} from './login/login.component';
import { LoginGuard } from './utility/loingaurd';


const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
  path:'Menu',
  component:MenuComponent,
  //lazy loading
  canActivate:[LoginGuard],
  canActivateChild:[LoginGuard],
  children:[{
    path:'Claim',
    loadChildren:()=>import('./claim/claim.module')
    .then(m=>m.ClaimModule)
  },
  {
    path:'Policy',
    component:PolicyComponent,
    children:[{
      path:'Renew',
      component:RenewComponent
    },
  {
    path:'ViewStatus',
    component:ViewstatusComponent
  }
  ]
  },
  {
    path:'Vehicle',
    component:VehicleComponent,
    children:[{
      path:'ViewVehicle',
      component:ViewvehicleComponent
    }]
  },
  {
    path:'Accounts',
    component:AccountsComponent,
    children:[{
      path:'MyProfile',
      component:MyprofileComponent
    },
  {
    path:'Logout',
    component:LoginComponent
  }]
  }
]
},{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
