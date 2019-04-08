import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdListComponent1 } from './prodList.component';
import { EditComponent } from './edit.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
{
    path: '',
    component: ProdListComponent1
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
