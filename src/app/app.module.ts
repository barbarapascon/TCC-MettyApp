import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfessoresPage } from '../pages/professores/professores';
import { TabsPage } from '../pages/tabs/tabs';
import { AreaDoUsuarioPage } from '../pages/area-do-usuario/area-do-usuario';
import { GrupoListaPage } from '../pages/grupo-lista/grupo-lista';
import { GrupoDetalhePage } from '../pages/grupo-detalhe/grupo-detalhe';
import { ChatPage } from '../pages/chat/chat';
import {EscolhaProfessorPage} from '../pages/escolha-professor/escolha-professor';
import { RegisterPage } from '../pages/register/register';
import {FilePath} from '@ionic-native/file-path';
import {File} from '@ionic-native/file'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import{AngularFireModule} from 'angularfire2';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { LoginPage } from "../pages/login/login";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { ProfilePage } from "../pages/profile/profile";
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ChatProvider } from '../providers/chat/chat';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { FileChooser } from "@ionic-native/file-chooser";
import { ProfilepicPage } from "../pages/profilepic/profilepic";
import { RequestsProvider } from '../providers/requests/requests';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfessoresPage,
    IntroPage,
    AreaDoUsuarioPage,
    GrupoListaPage,
    GrupoDetalhePage,
    ChatPage,
    EscolhaProfessorPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    ProfilepicPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    //IonicPageModule.forChild(LoginPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfessoresPage,
    IntroPage,
    AreaDoUsuarioPage,
    GrupoListaPage,
    GrupoDetalhePage,
    ChatPage,
    EscolhaProfessorPage,
     LoginPage,
    ProfilePage,
    RegisterPage,
    ProfilepicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthProvider,
    UserProvider,
    ChatProvider,
    ImghandlerProvider,
    File,
    FilePath,
    FileChooser,
    RequestsProvider
  ]
})
export class AppModule {}
