import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../servercies/student-service.service';
import { validation1 } from '../interface';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
  studentForm: FormGroup;
  array1: any;
  title='submit';
  id='';
  constructor(private fb: FormBuilder, public stu: StudentServiceService) {
    this.studentForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        middleName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
      }),
      dob: ['', Validators.required],
      placeOfBirth: ['', [Validators.required, Validators.minLength(2)]],
      firstLanguage: ['', [Validators.required, Validators.minLength(2)]],
      address: this.fb.group({
        city: ['', [Validators.required, Validators.minLength(2)]],
        state: ['', [Validators.required, Validators.minLength(2)]],
        country: ['', [Validators.required, Validators.minLength(2)]],
        pin: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
          ],
        ],
      })
    })
    this.array1 = this.stu.getAll()
  }

  onSubmit() {

    if ((typeof this.firstName?.value == 'string' &&
      typeof this.lastName?.value === 'string' &&
      typeof this.middleName?.value === 'string') &&
      (typeof this.city?.value == 'string' &&
        typeof this.state?.value === 'string' &&
        typeof this.country?.value === 'string' &&
        typeof this.pin?.value === 'string') &&
      typeof this.dob?.value == 'string' &&
      typeof this.placeOfBirth?.value == 'string' &&
      typeof this.firstLanguage?.value == 'string'
    ) {
      let obj = {
        Id:  this.id,
        name: {
          firstName: this.firstName?.value,
          middleName: this.middleName?.value,
          lastName: this.lastName?.value,
        },

        dob: this.dob?.value,
        placeOfBirth: this.placeOfBirth?.value,
        firstLanguage: this.firstLanguage?.value,
        address: {
          city: this.city?.value,
          state: this.state?.value,
          country: this.country?.value,
          pin: Number(this.pin?.value),
        }
      }
   
      this.stu.addData(obj,this.title)
      
      this.array1 = this.stu.getAll()
      console.log(this.stu.getAll());
      this.id='';
      
      if(this.title == 'update')this.title='submit'
      this.studentForm.reset()
    }
  
  }
  delete(id: string) {
    this.stu.deleteData(id);
  }
  update(id: string) {

    let ob1 = this.stu.getById(id)
    if(ob1 != undefined) {
      // ob1 ={} as validation1
      this.studentForm.patchValue(ob1);
alert('changes')
      this.title = 'update'
      this.id = ob1.Id;
      console.log(ob1);
      
    }
  }

  get name() {
    return <FormGroup>this.studentForm.get('name');
  }
  get firstName() {
    return this.name.get('firstName');
  }
  get middleName() {
    return this.name.get('middleName');
  }
  get lastName() {
    return this.name.get('lastName');
  }
  get dob() {
    return this.studentForm.get('dob');
  }
  get placeOfBirth() {
    return this.studentForm.get('placeOfBirth');
  }
  get firstLanguage() {
    return this.studentForm.get('firstLanguage');
  }
  get address() {
    return <FormGroup>this.studentForm.get('address');
  }
  get city() {
    return this.address?.get('city');
  }
  get state() {
    return this.address?.get('state');
  }
  get country() {
    return this.address?.get('country');
  }
  get pin() {
    return this.address?.get('pin');
  }
}