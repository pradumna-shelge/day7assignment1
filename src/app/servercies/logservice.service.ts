import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor() { }

  log(message: string){
    console.log(message);
  }
}
