import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(){
    // indicando la interface
    let contacts: IContact[] = [
      {
        name: 'Ignacio',
        number: '387601723'
      },
      {
        name: 'Juan',
        number: '4567890'
      },
      {
        name: 'Marcos',
        number: '872364'
      },
      {
        name: 'Lucho',
        number: '09823948'
      }
    ];  

    // return array
    return contacts;
  }
}
