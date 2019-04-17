import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './service/data.service';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';

import { AppComponent } from './app.component';
import { ProdListComponent } from './components/prodList.component';
import { CreateProductComponent } from './components/createProduct.component';
import { HeaderBarComponent } from './components/headerBar.component';
import { EditComponent } from './components/edit.component';
import { LoginComponent } from './login/login.component';
import { routingModule } from './routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HeaderInterceptor } from "./interceptors/header.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    EditComponent,
    ProdListComponent,
    LoginComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DataService,LoginService, UserService,{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
