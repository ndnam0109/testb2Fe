import { ConfirmTokenComponent } from './auth/confirm-token/confirm-token.component';

import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ChitietComponent } from './lythuyet/chitiet/chitiet.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { QuestionGuardsService as nam } from './guards/question-guards.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LythuyetComponent } from './lythuyet/lythuyet.component';
import { LichsuComponent } from './lichsu/lichsu.component';
import { DapanComponent } from './vaothi/dapan/dapan.component';
import { KetquaComponent } from './vaothi/ketqua/ketqua.component';
import { BaithiComponent } from './vaothi/baithi/baithi.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TacgiaComponent } from './tacgia/tacgia.component';
import { VaothiComponent } from './vaothi/vaothi.component';
import { HomeComponent } from './home/home.component';




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'admin', component: SidebarComponent,canActivate: [nam], data: { expectedRol: ['admin'] } },

  { path: '', redirectTo: '/testB2/trang-chu', pathMatch: 'full' },
  { path: 'loginAdmin', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'confirm-token', component: ConfirmTokenComponent },


  {
    path: 'testB2', component: HomeComponent,
    children: [
    {path:'',redirectTo:'trang-chu',pathMatch:"full"},
    { path: 'vao-thi', component: VaothiComponent,canActivate: [nam], data: { expectedRol: ['user', 'admin'] } },

      { path: 'vao-thi',
          children: [
          // {path:'',redirectTo:'vao-thi',pathMatch:"full"},
          // { path: 'vao-thi', component: VaothiComponent },
          { path: 'bai-thi', component: BaithiComponent,canActivate: [nam], data: { expectedRol: ['user','admin'] }},
          { path: 'ket-qua', component: KetquaComponent},
          { path: 'dap-an', component: DapanComponent},

      ]
      },

      { path: 'tac-gia', component: TacgiaComponent },
      { path: 'lich-su/:userName', component: LichsuComponent,canActivate: [nam], data: { expectedRol: ['user','admin'] } },
      { path: 'trang-chu', component: TrangchuComponent },
      { path: 'ly-thuyet', component: LythuyetComponent },
        {path:'ly-thuyet',
          children:[
            {path:':idCategory',component:ChitietComponent},
    ]
  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
