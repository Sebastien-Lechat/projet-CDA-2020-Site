import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './_modal';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { ModifierMotDePasseComponent } from './modifier-mot-de-passe/modifier-mot-de-passe.component';
import { FileActualiteComponent } from './file-actualite/file-actualite.component';
import { ContactaDecouvrirComponent } from './contacta-decouvrir/contacta-decouvrir.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ChangerNomUtulisateurComponent } from './changer-nom-utulisateur/changer-nom-utulisateur.component';





@NgModule({

  declarations: [
    AppComponent,
    MonPremierComponent,
    PageConnexionComponent,
    ModifierMotDePasseComponent,
    FileActualiteComponent,
    ContactaDecouvrirComponent,
    ProfilComponent,
    ModifierProfilComponent,
    ChangerNomUtulisateurComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule
  ],
  providers: [PageConnexionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
