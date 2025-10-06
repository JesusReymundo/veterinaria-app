import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mascotas',
    loadChildren: () => import('./mascotas/mascotas.module').then(m => m.MascotasModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas-module').then(m => m.CitasModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial-module').then(m => m.HistorialModule)
  },
  { path: '', redirectTo: '/citas', pathMatch: 'full' },
  { path: '**', redirectTo: '/citas' }
];
