import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProdListComponent1 } from '../components/prodList.component';
import { LoginComponent } from '../login/login.component';
import { EditComponent } from '../components/edit.component';
import { CreateProductComponent } from '../components/createProduct.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
{
    path: 'login',
    component: LoginComponent
  },
{
    path: '',
    component: ProdListComponent1
  },
  {
      path: 'createProduct',
      component: CreateProductComponent
    },
  {
    path: 'showProducts',
    children: [
          {
            path: ':id',
            component: EditComponent
          }
        ]

  }];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
