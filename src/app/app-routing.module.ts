import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'admins',
    component: AdminsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'service-providers',
    component: ServiceProvidersComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
