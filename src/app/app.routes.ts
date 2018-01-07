import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'popular'
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
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }

export const routingComponents = [
    ContactsComponent, 
    PopularComponent
];