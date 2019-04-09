import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { LoginService } from './login.service';

import { AppComponent } from './app.component';
import { ProdListComponent1 } from './prodList.component';
import { CreateProductComponent } from './createProduct.component';
import { EditComponent } from './edit.component';
import { LoginComponent } from './login.component';
import { routingModule } from './app-routing.module';
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
