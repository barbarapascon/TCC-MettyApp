import { Component } from '@angular/core';

import { AboutPage } from '../about/about';


import { ProfessoresPage } from '../professores/professores';
import {EscolhaProfessorPage} from '../escolha-professor/escolha-professor';
import { GrupoListaPage } from "../grupo-lista/grupo-lista";
import { AreaDoUsuarioPage } from "../area-do-usuario/area-do-usuario";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AreaDoUsuarioPage;
  tab2Root = AboutPage;
  tab3Root = GrupoListaPage;
  tab4Root = EscolhaProfessorPage;

  constructor() {

  }
}
