import { LoginComponent } from './auth/login/login.component';
import { Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VaothiComponent } from './vaothi/vaothi.component';
import { TacgiaComponent } from './tacgia/tacgia.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { BaithiComponent } from './vaothi/baithi/baithi.component';
import { KetquaComponent } from './vaothi/ketqua/ketqua.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { DapanComponent } from './vaothi/dapan/dapan.component';
import { LichsuComponent } from './lichsu/lichsu.component';
import { LythuyetComponent } from './lythuyet/lythuyet.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ChitietComponent } from './lythuyet/chitiet/chitiet.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { ConfirmTokenComponent } from './auth/confirm-token/confirm-token.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VaothiComponent,
    TacgiaComponent,
    TrangchuComponent,
    BaithiComponent,
    KetquaComponent,
    DapanComponent,
    LichsuComponent,
    LythuyetComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    AdminComponent,
    SidebarComponent,
    ChitietComponent,
    ForgotPasswordComponent,
   
    ConfirmTokenComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgxSpinnerModule

   
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
