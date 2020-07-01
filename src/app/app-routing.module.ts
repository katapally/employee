import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-employe' },
  { path: 'add-employe', component: AddEmployeComponent },
  { path: 'employe-list', component: EmployeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
