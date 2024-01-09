import { Routes } from '@angular/router';
import { MapComponent } from "./map/map.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";

export const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: '',   redirectTo: '/admin-panel', pathMatch: 'full' },
];
