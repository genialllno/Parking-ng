import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesComponent } from './components/spaces/spaces.component';
import { SpaceDetailsComponent } from './components/space-details/space-details.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'spaces', component: SpacesComponent },
  { path: 'space/:id', component: SpaceDetailsComponent },

  { path: '**', redirectTo: '', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
