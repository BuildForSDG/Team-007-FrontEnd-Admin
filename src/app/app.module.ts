import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FarmersComponent } from './farmers/farmers.component';
import { AdminsComponent } from './admins/admins.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NavComponent } from './nav/nav.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    FarmersComponent,
    AdminsComponent,
    TransactionsComponent,
    NavComponent,
    ServiceProvidersComponent,
    BlogComponent,
    UsersComponent,
    CategoryComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
