import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employees-overview', pathMatch: 'full' },
  { path: 'employees-overview', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)},
  { path: '**', redirectTo: 'employees-overview' },
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
