import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfessoresPage } from '../professores/professores';
import {EscolhaProfessorPage} from '../escolha-professor/escolha-professor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = EscolhaProfessorPage;

  constructor() {

  }
}
