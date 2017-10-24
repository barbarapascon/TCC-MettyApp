import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrupoListaPage } from './grupo-lista';

@NgModule({
  declarations: [
    GrupoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(GrupoListaPage),
  ],
  exports: [
    GrupoListaPage
  ]
})
export class GrupoListaPageModule {}
