import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
