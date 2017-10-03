import { Routes, RouterModule } from '@angular/router'

import { RecursosListaComponent } from './recursos-lista/recursos-lista.component'
import { RecursosFormComponent } from './recursos-form/recursos-form.component'

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
   },

   {
      path: 'recursos/novo',
      component: RecursosFormComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)