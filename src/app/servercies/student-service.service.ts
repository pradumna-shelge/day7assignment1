import { Injectable } from '@angular/core';
import { validation1 } from '../interface';
import { LogserviceService } from './logservice.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
CentralArray:validation1[]=[demo];
sup=0;
pre = 'stud:'

constructor(private logService:LogserviceService) {}

  addData(data:validation1,str:string){

    if(str == 'update'){
    let  inx =this.CentralArray.findIndex(ob => ob.Id == data.Id);
    this.CentralArray[inx] = data;
    this.logService.log(`Updated student ${data.name.firstName}`);
    }
    else{

      data.Id = this.pre.concat(this.sup.toString())
      this.sup+=1;
      this.CentralArray.push(data)
    this.logService.log(`Added student ${data.name.firstName}`);

    }
    
  }

  getAll():validation1[]{
    return this.CentralArray;
  }

  getById(id:string):validation1|undefined{
     return this.CentralArray.find(c => c.Id === id)
    
  }



  deleteData(inx:string){
    let index =  this.CentralArray.findIndex(c => c.Id ===inx)
    this.logService.log(`deleted student ${this.CentralArray[index].name.firstName}`);
    this.CentralArray.splice(index,1)


  }

  updateData(data:validation1){
    this.CentralArray.forEach(ob => {
      if(data.Id === ob.Id){
          ob.Id=data.Id,
          ob.address = data.address,
          ob.firstLanguage = data.firstLanguage,
          ob.name = data.name,
          ob.dob = data.dob  
      }
     });
  }
}


export let demo = {
  Id:'',
  name: {
    firstName: '',
    middleName: '',
    lastName: '',
  },

  dob: '',
  placeOfBirth: '',
  firstLanguage: '',
  address: {
    city: '',
    state: '',
    country: '',
    pin: Number(''),
  }
}
