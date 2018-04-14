import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registration } from '../../models/reg.model';
import { RegistrationService } from '../../../service/reg.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup;
  Reg : Registration;

  constructor(private fb : FormBuilder,
              private service : RegistrationService) { }

  ngOnInit() {
  //  this.FormBind();
  }
  FormBind(){
    this.RegistrationForm = this.fb.group({
      firstName: [''],
      lastName : [''],
      email : [''],
      password : [''],
      phoneNo : [''],
      designation : ['']
    });
  }

  SaveForm(){
    debugger
    let a = Object.assign({},this.Reg,this.RegistrationForm.value);
    console.log(a)
    this.service.insertRegistration(a).subscribe(res =>{
          this.RegistrationForm.reset();
    });
  }
}
