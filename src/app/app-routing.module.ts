import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { CheckTestComponent } from './main/check-test/check-test.component';
import { LoginComponent } from './main/login/login.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { TestComponent } from './main/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'test', component: TestComponent},
  {path: 'checkTest', component: CheckTestComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
