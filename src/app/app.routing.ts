import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './components/login.component';
import { signupComponent } from './components/signup.component';
import { registrationComponent } from './components/registration.component';
import { customerdataComponent } from './components/customerdata.component';
import { editComponent } from './components/edit.component';


const appRoutes: Routes = [
//     {
//       path: '', redirectTo:'user',pathMatch:'full'
//   },signupComponent,customerdataComponent,customerdata,editComponent
  
  {
      path: 'login', component: loginComponent
  },
  {
    path: 'signup', component: signupComponent
},
{
    path: 'registration/:id', component: registrationComponent
},
{
    path: 'customerdata', component: customerdataComponent
},
{
    path: 'edit', component: editComponent
}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);