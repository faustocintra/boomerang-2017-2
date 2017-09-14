import { Routes, RouterModule } from '@angular/router'

import { RecursosListaComponent } from './recursos-lista/recursos-lista.component'

const routes : Routes = [

   // Rota raiz /
   {
      path: '',
      component: RecursosListaComponent
   },

   // Rota /recursos
   {
      path: 'recursos',
      component: RecursosListaComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)