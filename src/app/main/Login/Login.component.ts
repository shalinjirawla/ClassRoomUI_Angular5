import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
    selector   : 'fuse-login',
    templateUrl: './Login.component.html',
    styleUrls  : ['./Login.component.scss']
})
export class FuseLoginComponent implements OnInit
{

    loginForm : FormGroup;

    constructor(private builder : FormBuilder)
    {    }

    ngOnInit()
    {
        this.LoadForm();
    }

    LoadForm(){
        this.loginForm = this.builder.group({
            Email : [''],
            Password : ['']
        });
    }

}
