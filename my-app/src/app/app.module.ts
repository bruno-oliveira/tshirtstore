import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './service/data.service';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { ProdListComponent1 } from './components/prodList.component';
import { CreateProductComponent } from './components/createProduct.component';
import { EditComponent } from './components/edit.component';
import { LoginComponent } from './login/login.component';
import { routingModule } from './routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    EditComponent,
    ProdListComponent1,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
