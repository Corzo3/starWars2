import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    loadChildren: () =>
      import('src/app/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'personajes',

    loadChildren: () =>
      import('./personajes/personajes.module').then((m) => m.PersonajesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
