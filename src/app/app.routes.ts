import { Routes } from '@angular/router';

export const routes: Routes = [

{path:'',loadComponent:()=>import('./load/load.component').then(mod=>mod.LoadComponent)}

];
  