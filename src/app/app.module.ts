import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PolicyComponent,
    VehicleComponent,
    AccountsComponent,
    RenewComponent,
    ViewstatusComponent,
    ViewvehicleComponent,
    LogoutComponent,
    MyprofileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MenubarModule,HttpClientModule,FormsModule,MatInputModule
    ,MatIconModule,MatFormFieldModule,MatButtonModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
