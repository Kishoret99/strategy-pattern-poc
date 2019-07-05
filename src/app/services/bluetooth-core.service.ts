import { Injectable } from '@angular/core';
import { BluetoothService } from './bluetooth.service';

@Injectable({
  providedIn: 'root'
})
export class BluetoothCoreService extends BluetoothService {
  
  entities = new Map();
  constructor() { 
    super();
  }

  register(name: string, successHandler: any, failureHandler: any) {
    name = name.toUpperCase();
    this.entities.set(name + "__SUCCESS", successHandler);
    this.entities.set(name + "__FAILURE", failureHandler);
  }

  sentSuccess(payload) {
    const handler = this.currentEntity(payload) + "__SUCCESS";
    if(this.entities.has(handler)) {
      this.entities.get(handler)(payload)
    }
  }
}
