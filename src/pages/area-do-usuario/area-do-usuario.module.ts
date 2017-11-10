import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaDoUsuarioPage } from './area-do-usuario';

@NgModule({
  declarations: [
    AreaDoUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaDoUsuarioPage),
  ],
  exports: [
    AreaDoUsuarioPage
  ]
})
export class AreaDoUsuarioPageModule {}
