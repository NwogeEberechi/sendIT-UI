import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { SignupComponent } from './components/accounts/signup/signup.component';
import { AccountComponent } from './components/dashboard/account/account.component';
import { ParcelOrderComponent } from './components/dashboard/parcel-order/parcel-order.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: AccountComponent,
    children: [
      {
        path: 'order',
        component: ParcelOrderComponent
      },
      {
        path: '',
        component: ParcelOrderComponent
      },
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
