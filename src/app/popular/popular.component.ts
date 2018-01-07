import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  contacts: any[];

  constructor(
    private _contact: ContactsService
  ) { }

  ngOnInit() {
    // devuelve los 3 primeros del array
    this.contacts = this._contact.getContacts().slice(0,3);
  }

}
