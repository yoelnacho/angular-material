import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

// Material
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
 
// Components
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

// Services
import { ContactsService } from './contacts.service';

const routes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
