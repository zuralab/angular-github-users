import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {UserListComponent} from './pages/user-list/user-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { StoreModule } from '@ngrx/store';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import {AppComponent} from "./app.component";
import {MatCardModule} from "@angular/material/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatGridListModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    MatCardModule,
    NgbModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
