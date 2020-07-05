import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { ModifierMotDePasseComponent } from './modifier-mot-de-passe/modifier-mot-de-passe.component';
import { FileActualiteComponent } from './file-actualite/file-actualite.component';
import { ContactaDecouvrirComponent } from './contacta-decouvrir/contacta-decouvrir.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: MonPremierComponent },
  { path: 'signup', component: MonPremierComponent },
  { path:'signin', component: PageConnexionComponent },
  { path: 'Modifier', component: ModifierMotDePasseComponent /*, canActivate:[AuthGuard]*/},
  { path: 'FileActualite', component: FileActualiteComponent /*, canActivate:[AuthGuard] */},
  { path:'Decouvrir', component: ContactaDecouvrirComponent /*, canActivate:[AuthGuard]*/},
  {path:'Profil', component:ProfilComponent /*, canActivate:[AuthGuard]*/},
  {path:'ModifierProfil', component:ModifierProfilComponent /*, canActivate:[AuthGuard]*/}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

