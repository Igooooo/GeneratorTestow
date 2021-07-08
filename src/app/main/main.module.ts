import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { CheckTestComponent } from './check-test/check-test.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TestComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    CheckTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSimpleCountdownModule
  ]
})
export class MainModule { }
