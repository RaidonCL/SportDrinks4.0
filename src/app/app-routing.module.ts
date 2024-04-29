import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./page/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'registro-local',
    loadChildren: () => import('./page/registro-local/registro-local.module').then( m => m.RegistroLocalPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./page/rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'sectores',
    loadChildren: () => import('./page/sectores/sectores.module').then( m => m.SectoresPageModule)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./page/tiendas/tiendas.module').then( m => m.TiendasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
