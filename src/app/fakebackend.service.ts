import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable()
export class FakebackendService implements InMemoryDbService{

  createDb(){
 
    const students = [
      { id: 1, name: 'preet' },
      { id: 2, name: 'sohil' },
      { id: 3, name: 'chirag' },
      { id: 4, name: 'raj' }
  
    ];
    return {students};
  }
  constructor() { }

}
