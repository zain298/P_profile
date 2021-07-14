import { SNewspageComponent } from './newspage/s-newspage/s-newspage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'events', component: EventpageComponent },
  {
    path: 'news',
    component: NewspageComponent,
  },
  { path: 'Snews/:id', component: SNewspageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
