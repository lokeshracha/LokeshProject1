import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { loginComponent } from './components/login.component';
import { routing } from './app.routing';
import { signupComponent } from './components/signup.component';
import { registrationComponent } from './components/registration.component';
import { commonservice } from './services/common.service';
import {HttpModule} from '@angular/http';
import { customerdataComponent } from './components/customerdata.component';
import { editComponent } from './components/edit.component';

@NgModule({
  declarations: [
    AppComponent,loginComponent,signupComponent,registrationComponent,customerdataComponent,editComponent
  ],
  imports: [
    BrowserModule,routing,HttpModule,ReactiveFormsModule,FormsModule
  ],
  providers: [commonservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
