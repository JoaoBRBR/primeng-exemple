import { Routes } from '@angular/router';
import { MenuComponent } from '../pages/menu/menu.component';
import { FieldsComponent } from '../pages/fields/fields.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full"
  },
  {
    path: "menu",
    component: MenuComponent,
    // data: { animation: 'openClosePage' }
  },
  {
    path: "fields",
    component: FieldsComponent,
    data: { animation: 'openClosePage' }
  }
];
