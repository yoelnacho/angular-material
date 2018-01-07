import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Material
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatToolbarModule } from '@angular/material';
 
// Components
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

// Services
import { ContactsService } from './contacts.service';
import { AppRoutingModule } from './app.routes';

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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
