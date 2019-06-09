import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetsComponent } from './targets/targets.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/targets', pathMatch: 'full' },
  { path: 'detail/:id', component: TargetDetailComponent },
  { path: 'targets', component: TargetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
